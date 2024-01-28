// imports/ui/components/lender/LenderDashboard.jsx
import React from 'react';
import LoanConfirmationForm from './LoanConfirmationForm';

const LenderDashboard = ({ loans }) => {
  return (
    <div>
      <h1>Welcome Lender</h1>
      {/* Display relevant information for lender */}
      {/* Example: Display past loans and a loan confirmation form */}
      <h2>Past Loans</h2>
      {loans.map((loan) => (
        <p key={loan._id}>{loan.amount} - {loan.status}</p>
      ))}
      <h2>Loan Confirmation Form</h2>
      <LoanConfirmationForm />
    </div>
  );
};

export default LenderDashboard;
