// client/main.js
import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";
import "./templates/admin/admin_dashboard.js";
import "./templates/borrower/borrower_dashboard.js";
import "./templates/lender/lender_dashboard.js";

// Example: Define a common helper that returns all loans
Template.registerHelper("allLoans", function () {
  return Loans.find();
});

// Example: Define a common helper that returns all users
Template.registerHelper("allUsers", function () {
  return Meteor.users.find();
});
