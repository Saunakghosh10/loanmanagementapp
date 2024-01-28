// imports/ui/components/borrower/BorrowerDashboard.jsx
import React from 'react';
import LoanRequestForm from './LoanRequestForm';

const BorrowerDashboard = ({ loans }) => {
  return (
    <div>
      <h1>Welcome Borrower</h1>
      {/* Display relevant information for borrower */}
      {/* Example: Display past loans and a loan request form */}
      <h2>Past Loans</h2>
      {loans.map((loan) => (
        <p key={loan._id}>{loan.amount} - {loan.status}</p>
      ))}
      <h2>Loan Request Form</h2>
      <LoanRequestForm />
    </div>
  );
};

export default BorrowerDashboard;
