const assert = require('assert');
const { Given, When, Then, DataTable } = require('@cucumber/cucumber');

const createUser = require('../../../controllers/users');
const login = require('../../../controllers/login');


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
