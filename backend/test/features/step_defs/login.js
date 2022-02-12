import { Given } from '@cucumber/cucumber';

//Scearnio: Successful login
Given('the following account exists in the system:', function(username, password) {
    createUser(username, password);
});
When('the user logs in using username {stringName} and password {userPassword}', function() {
})
Then('the user shall be logged in', function() {}); 

//Scenario: Unsuccessful login
When('the user logs in using username {username} and password {password}', function() {})
Then('the user is not logged in', function() {})
And('an error message {error} shall be raised', function() {});