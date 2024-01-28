// imports/startup/server/index.js
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  // Server startup logic

  // Example: Create roles on startup if they don't exist
  const roles = ['admin', 'borrower', 'lender'];
  roles.forEach((role) => {
    if (!Meteor.roles.findOne({ name: role })) {
      Roles.createRole(role);
    }
  });

  // Example: Create an admin user on startup if none exists
  if (!Meteor.users.findOne({ roles: 'admin' })) {
    const adminUserId = Accounts.createUser({
      email: 'admin@example.com',
      password: 'adminpassword',
    });

    Roles.addUsersToRoles(adminUserId, 'admin');
  }
});
