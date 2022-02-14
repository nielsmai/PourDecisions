// import assert from 'assert';
// import { Given, When, Then }  from '@cucumber/cucumber';
// import { createUser } from '../../../controllers/users';
// import { login } from '../../../controllers/login';

const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { createUser } = require('../../../controllers/users');
const { login } = require('../../../controllers/login');

var errorMsg = "";
var loggedIn = false;

//Scearnio: Successful login
Given('the following account exists in the system:', function(dataTable) {
    const username = dataTable.username;
    const password = dataTable.password;
    assert.equal(username, "User1");
    assert.equal(password, "userpassword01");
    return 'pending';
});
Given('the following account exists in the system:', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    const username = dataTable.username;
    const password = dataTable.password;
    assert.equal(username, "User1");
    assert.equal(password, "userpassword01");
    return 'pending';
  });
When('the user logs in using username {stringName} and password {userPassword}', function(dataTable) {
    const username = dataTable.username;
    const password = dataTable.password;
    loggedIn = login(username, password);
    assert.equal(loggedIn, true);
})
Then('the user shall be logged in', function(dataTable) {
    const username = dataTable.username;
    const password = dataTable.password;
    loggedIn = login(username, password);
    assert.equal(loggedIn, true);
})

//Scenario: Unsuccessful login
When('the user logs in using username {username} and password {password}', function(dataTable) {
    try {
        const username = dataTable.username;
        const password = dataTable.password
        loggedIn = login(username, password);
        assert.equal(loggedIn, false);
    }
    catch(error){
        assert.equal(loggedIn, false);
    }
})
Then('the user is not logged in', function(dataTable) {
    try {
        const username = dataTable.username;
        const password = dataTable.password
        loggedIn = login(username, password);
        assert.equal(loggedIn, false);
    }
    catch(error){
        assert.equal(loggedIn, false);
    }
})
And('an error message {error} shall be raised', function(dataTable) {
    try {
        const username = dataTable.username;
        const password = dataTable.password
        loggedIn = login(username, password);
        assert.equal(loggedIn, false);
    }
    catch(error){
        errorMsg += error.message;
    }
})
