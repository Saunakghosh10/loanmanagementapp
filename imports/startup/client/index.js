// imports/startup/client/index.js
import '/imports/ui/layouts/MainLayout.jsx';
import '/imports/ui/components/admin/AdminDashboard.jsx';
import '/imports/ui/components/borrower/BorrowerDashboard.jsx';
import '/imports/ui/components/lender/LenderDashboard.jsx';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Define routes
FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('mainLayout', { content: 'adminDashboard' });
  },
});

FlowRouter.route('/borrower', {
  name: 'borrower',
  action() {
    BlazeLayout.render('mainLayout', { content: 'borrowerDashboard' });
  },
});

FlowRouter.route('/lender', {
  name: 'lender',
  action() {
    BlazeLayout.render('mainLayout', { content: 'lenderDashboard' });
  },
});
