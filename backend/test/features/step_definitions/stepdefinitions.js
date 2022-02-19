const axios = require('axios');
const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { login } = require('../../../controllers/login.js');
const { logout } = require('../../../controllers/logout.js');

// idk, i'll use this for now
require('dotenv').config({path:__dirname+'/./../../../.env'});
const backendUrl = process.env.DEV_API_HOST + ':' + process.env.DEV_API_PORT || process.env.API_HOST + ':' + process.env.API_PORT;
const frontendUrl = process.env.DEV_CLIENT_HOST + ':' + process.env.DEV_CLIENT_PORT || process.env.CLIENT_HOST + ':' + process.env.CLIENT_PORT;

const AXIOS = axios.create({
    baseUrl: backendUrl,
    headers: {'Access-Control-Allow-Origin': frontendUrl}
});

var errorMsg = "";
var confirmMsg = "";

// const { createDrink, createIngredient, createRecipe, getDrinkByName } = require('../../../controllers/drinks'); 
const drinkController = require('../../../controllers/drinks');
const userController = require('../../../controllers/users');

/////////////////////////////////////////////////////////////////////////////
///////////////// Global STEPS //////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
Given('the user {string} with password {string} is logged into their account', async function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
    const username = string;
    const password = string2;
    const email = "test-email@mail.com"; // using this for now cause lol
    
    // TODO create user using route 
    try {
        let res = await AXIOS.post('/users', {
            username: username,
            password: password,
            email: email
        });
        console.log(res.status); // for now 
        
        login(username, password);
     
    } catch (err) {
        
    }

});

Given('the following accounts exist in the system:', function (dataTable) {
  // Write code here that turns the phrase above into concrete actions
    // TODO
    // iterate through table
    for (let i in dataTable.rows) {
        let row = table.rows[i];
        assert(row.cells[0] == "bbbb")
        assert(row.cells[1] == "aaaa")
    }

    // get all username/password

    // check if they exist
      // return 'pending';
});

Given('the following drinks exist in the system:', function (dataTable) {
  // Write code here that turns the phrase above into concrete actions
    // TODO
    // iterate through table
    // look at each name
    // check if each exist
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
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Given('the account with the username {string} and password {string} already exists', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('I create a user account with username {string} and password {string}', function (string, string2) {           // Write code here that turns the phrase above into concrete actions
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

When('the user {string} creates a new drink recipe with the name {string} and the ingredients {string}', function (string, string2, string3) {
  // Write code here that turns the phrase above into concrete actions
    // this does not work 
    try {
        const author = string; 
        const name = string2;

        const ingredientStringList = string3.split(",");
        const ingredientList = [];
        for (let i = 0; i < ingredientStringList.length; i++){
            // TODO create a route for ingredients
            ingredientList[i] = drinkController.createIngredient({
                "ingredientName": ingredientStringList[i]
            });
        }

        // TODO create a route for recipe
        const recipe = drinkController.createRecipe({
            "ingredients": ingredientList
        });

        // TODO use route to create drink
        drinkController.createDrink({
            "name": name,
            "author": author,
            "recipe": recipe
        });

    } catch (err) {
        console.log("bruh");         
    }

});

Then('the new drink {string} is added to the system', function (string) {
  // Write code here that turns the phrase above into concrete actions
    // TODO get route 
    drinkController.getDrinkByName(string)
    .then(res => res.json())
    .then(data =>{
            // assert(data.status.ok);
            console.log(data.status.ok);
            assert(data.name === string);
        } 
    )
});

/////////////////////////////////////////////////////////////////////////////
///////////////// LOGIN /////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

When('the user logs in using {string} and {string}', function (string, string2) {
  try{
    var loginTest = login(string, string2);
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
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user inputs the wrong old password {string},inputs the new password {string} and confirms the new password {string}', function (string, string2, string3) {
            // Write code here that turns the phrase above into concrete actions
            return 'pending';
          });

Then('the user\'s new password is now {string} and a confirmation message {string} is raised', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
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
