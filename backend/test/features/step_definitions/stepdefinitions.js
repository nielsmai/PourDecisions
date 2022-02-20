const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const login = require('../../../controllers/login.js');
const logout = require('../../../controllers/logout.js');
const { createUser, getAllUsers, updateUser } = require('../../../controllers/users.js');
const User = require('../../../models/user.model.js');
const { find } = require('../../../models/user.model.js');


var errorMsg = "";
var confirmMsg = "";

/////////////////////////////////////////////////////////////////////////////
///////////////// Global STEPS //////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
Given('the user {string} with password {string} is logged into their account', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Given('the following accounts exist in the system:', function (dataTable) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Given('the following drinks exist in the system:', function (dataTable) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('an error message {string} shall be raised', function (string) {
  assert.equal(errorMsg,string);
  // Write code here that turns the phrase above into concrete actions
});
/////////////////////////////////////////////////////////////////////////////
///////////////// CREATE ACCCOUNT ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

Given('the username {string} does not already exist', function (string) {
  let exists=false;
  User.find({username:string});
  assert.equal(exists,false);
  return 'pending';
});

Given('the account with the username {string} and password {string} already exists', function (string, string2) {
  let exists=false;
  User.find({username:string,password:string2});
  assert.equal(exists,true);
  return 'pending';
});

When('I create a user account with username {string} and password {string}', function (string, string2) {           // Write code here that turns the phrase above into concrete actions
  const email = string+'@email.com'
  try {
        // let res = await AXIOS.post('/users/register', {
        //     username: username,
        //     password: password,
        //     email: email
        // });
        createUser({
          "username": string,
          "password": string2,
          "email": email
      })
      console.log(res.status); // for now 
  } catch (err) {
    errorMsg=err.message;
  }
  return 'pending';
});

Then('the account shall have username {string} and password {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('I should be logged in as user {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('no new account shall be created', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

/////////////////////////////////////////////////////////////////////////////
///////////////// CREATE DRINK //////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

When('the user creates a new drink recipe with the name {string} and the ingredients {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the new drink {string} is added to the system', function (string, dataTable) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

/////////////////////////////////////////////////////////////////////////////
///////////////// LOGIN /////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

When('the user logs in using {string} and {string}', function (string, string2) {
  try{
    var loginTest = login.login(string, string2);
    assert.equal(true, loginTest);
  }
  catch(err){
    errorMsg = err.message
  }
  // Write code here that turns the phrase above into concrete 
});

Then('the user shall be logged in', function () {
  // Write code here that turns the phrase above into concrete actions
  assert.notEqual(null, sessionStorage.getItem('status'));
});

Then('the user is not logged in', function () {
  // Write code here that turns the phrase above into concrete actions
  assert.equal(null, sessionStorage.getItem('status'));
});

/////////////////////////////////////////////////////////////////////////////
///////////////// LOGOUT ////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
When('the user logs out', function () {
  // Write code here that turns the phrase above into concrete actions
  var logoutTest = logout.logout();
  confirmMsg = logoutTest;
});

Then('the user is logged out of the system with a confirmation message {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  assert.equal(null, sessionStorage.getItem('status'));
  assert.equal(string, confirmMsg);
});


/////////////////////////////////////////////////////////////////////////////
///////////////// SEARCH ////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

When('the user {string} provides the drink name {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});



When('the user {string} provides a list of ingredients {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user {string} provides a list of restrictions {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user {string} provides a like range of {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user {string} requests to view the drinks', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user searches a drink made by {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the drink with name {string}, likes {string} shall be returned', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the list of drinks shall be {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

/////////////////////////////////////////////////////////////////////////////
///////////////// UPDATE ACCOUNT ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

When('the user inputs the old password {string}, inputs the new password {string} and confirms the new password {string}', function (string, string2, string3) {
  // updateUser();
  return 'pending';
});

When('the user inputs the wrong old password {string},inputs the new password {string} and confirms the new password {string}', function (string, string2, string3) {
  try {
   //updateUser();
  } catch (err) {
    errorMsg=err.message;
  }
  return 'pending';
 });

Then('the user\'s new password is now {string} and a confirmation message {string} is raised', function (string, string2) {
  //assert.equal(password,string);
  //assert.equal(message,string2);
  return 'pending';
});

/////////////////////////////////////////////////////////////////////////////
///////////////// UPDATE DRINK //////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

Given('the user {string} with password {string} is an admin', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user {string} favourites the drink {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user changes the recipe\'s status', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user modifies the drink {string} by adding a new ingredient {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the drink {string} shall be in the user {string}\'s catalogue', function (string, string2) {      
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the new ingredient {string} shall be added to drink {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('there shall be {string} less drink recipe in the system', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the new ingredients list {string} shall be displayed', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the admin {string} deletes the drink {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user modifies the drink {string} by removing the ingredient {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the ingredient {string} shall be removed from the drink {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the drink {string} shall have {string} more like', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the recipe status shall be {string} and a confirmation message {string} shall be raised', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the new ingredient {string} shall not be added to drink {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

/////////////////////////////////////////////////////////////////////////////
///////////////// VIEW //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

When('the user {string} requests to view the drinks in alphabetical order', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the list of drinks is displayed in alphabetical order', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user {string} requests to view drinks by newest', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the list of drinks is displayed in order of their creation', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user {string} requests to view drinks by their rating', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the list of drinks is displayed in descending order of their rating', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user {string} requests to view drinks from a given rating', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Given('that the user {string} has favourited the drink {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the list of drinks within the given range is displayed', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user requests to view their favourites', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the drink {string} shall be displayed', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('no drinks shall be displayed.', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user displays the list of custom drinks', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the custom drinks {string} with author {string} shall be displayed', function (string, string2) {        
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});