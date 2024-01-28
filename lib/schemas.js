// lib/schemas.js
LoansSchema = new SimpleSchema({
  amount: {
    type: Number,
    min: 1, // Minimum loan amount
  },
  borrowerId: {
    type: String,
  },
  lenderId: {
    type: String,
    optional: true, // LenderId is optional for loan requests
  },
  status: {
    type: String,
    allowedValues: ["pending", "approved", "rejected", "paid"],
    defaultValue: "pending",
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return { $setOnInsert: new Date() };
      } else {
        this.unset();
      }
    },
  },
});

Loans.attachSchema(LoansSchema);
