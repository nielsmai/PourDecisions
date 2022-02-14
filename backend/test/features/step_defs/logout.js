import assert from 'assert';
import { Given, When, Then }  from '@cucumber/cucumber';
import { createUser } from '../../../controllers/users';
import { logout } from '../../../controllers/logout';

var errorMsg = "";

Given('the user is logged into an account with username User1', function(dataTable) {
    const username = dataTable.username;
    const password = dataTable.password;
    loggedIn = login(username, password);
    assert.equal(loggedIn, true);
});
When('the user logs out', function(dataTable) {
    const username = dataTable.username;
    var message = logout(username);
})
Then('the user is logged out of the system with a confirmation message LOGOUT-SUCCESSFUL', function(dataTable){
    const username = dataTable.username;
    var message = logout(username);
    var expected = "LOGOUT-SUCCESFUL";
    assert.equal(expected, message);
})


Given('the user is logged into an account with username "Guest"', function(dataTable){
    const username = dataTable.username;
    const password = dataTable.password
    loggedIn = login(username, password);
    assert.equal(loggedIn, true);
    assert.equal("Guest", username);
})
When('the user logs out', function(dataTable) {
    const username = dataTable.username;
    var message = logout(username);
})
Then('the user is logged out of the system with a confirmation message LOGOUT-SUCCESSFUL', function(dataTable){
    try{const username = dataTable.username;
    var message = logout(username);
    var expected = "LOGOUT-INVALID";
    assert.equal(expected, message);
    }
    catch(error) {
        errorMsg += error.message;
        assert.equal("LOGOUT-INVALID", errorMsg);
    }
})