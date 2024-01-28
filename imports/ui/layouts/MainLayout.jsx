// imports/ui/layouts/MainLayout.jsx
import React from 'react';

const MainLayout = ({ content }) => {
  return (
    <div>
      {/* You can add a common layout structure here */}
      <header>
        <h1>Your Loan Management App</h1>
      </header>
      <main>
        {content}
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Company</p>
      </footer>
    </div>
  );
};

export default MainLayout;
