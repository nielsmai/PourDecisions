const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');


//Create Account
Given('the username Fiona does not already exist', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
When('I create a user account with username Fiona and password psd22', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('a new user account shall be created', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('the account shall have username Fiona and password psd22', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('I should be logged in as <user>', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Given('the username <username> does not already exist', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
When('I create a user account with username <username> and password <password>', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('I should be logged in as <username>', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Given('the username {string} already exists', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
When('I create a user account with username Johnson and password {int}', function (int) {
// When('I create a user account with username Johnson and password {float}', function (float) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('no new user account shall be created', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('an error message ACCOUNT-CREATE-INVALID shall be raised', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Given('the username <username> already exists', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

Then('an error message <error> shall be raised', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
When('I provide a new username Johnson and a password ', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('no new account shall be created', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('an error message ACCOUNT-CREATE-EMPTY-PASS shall be raised', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
When('I provide a new username  and a password apple123', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

Then('an error message ACCOUNT-CREATE-EMPTY-USER shall be raised', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

//Create Drinks
Given('the following account exists in the system:', function (dataTable) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Given('the following drink recipes exist in the system:', function (dataTable) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Given('the user is logged into an account with username {string}', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
When('the user creates a new drink recipe with the name {string} and the ingredients {string}', function (string, string2) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('the new drink recipe is added to the system', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

Then('an error message {string} shall be raised', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

//Login Feature

When('the user logs in using username {string} and password {string}', function (string, string2) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('the user shall be logged in', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

When('the user logs in using <username> and <password>', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('the user is not logged in', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

//Logout Feature


When('the user logs out', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('the user is logged out of the system with a confirmation message {string}', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

//Search Drink By Attribute Feature
Given('the following user exist in the system:', function (dataTable) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Given('the following guest exist in the system:', function (dataTable) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Given('the following drinks exist in the system:', function (dataTable) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Given('User {string} is logged into their account', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
When('User provides the drink name {string}', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('the drink with name {string}, likes {string} shall be returned', function (string, string2) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

When('User {string} inputs the name of a Drink Long Island ice tea in the search bar', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
When('User <clicks on the search button', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('a {string} error message is found', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});


When('User {string} inputs a list of ingredients Lemon, lime juice, lemonade, soda water, lemon juice, orange', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
When('User  {string} clicks on the search button', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('the drink catalogue page is filtered', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

Then('lists all drink recipes Jogger, Lemime, Orange & Lemon Crystal Martini containing a combination of the inputted ingredients', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

When('User {string} inputs a list of restrictions Non-alcoholic, fruit-based', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
When('User {string} clicks on the search button', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

Then('lists all drink recipes Jogger matching the inputted restrictions', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

When('User {string} inputs a list of restrictions fruit-based', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

Then('lists all drink recipes Jogger, Lemime, Orange & Lemon Crystal Martini matching the inputted restrictions', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

When('User {string} inputs a list of restrictions ', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

When('User {string} selects a range of like counts {int}-{int}', function (string, int, int2) {
// When('User {string} selects a range of like counts {int}-{float}', function (string, int, float) {
// When('User {string} selects a range of like counts {float}-{int}', function (string, float, int) {
// When('User {string} selects a range of like counts {float}-{float}', function (string, float, float2) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
// Then('the drink catalogue page is filtered', function () {
// // Write code here that turns the phrase above into concrete actions
// return 'pending';
// });
Then('displays all the drink recipes Jogger, Lemime within that range {int}-{int}', function (int, int2) {
// Then('displays all the drink recipes Jogger, Lemime within that range {int}-{float}', function (int, float) {
// Then('displays all the drink recipes Jogger, Lemime within that range {float}-{int}', function (float, int) {
// Then('displays all the drink recipes Jogger, Lemime within that range {float}-{float}', function (float, float2) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

Then('displays all the drink recipes Orange & Lemon Crystal Martini within that range {int}-{int}', function (int, int2) {
// Then('displays all the drink recipes Orange & Lemon Crystal Martini within that range {int}-{float}', function (int, float) {
// Then('displays all the drink recipes Orange & Lemon Crystal Martini within that range {float}-{int}', function (float, int) {
// Then('displays all the drink recipes Orange & Lemon Crystal Martini within that range {float}-{float}', function (float, float2) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

//Search Drink By User Feature
Given('I am logged in as <user>', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
When('I search a drink with <user>', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('I should see', function (dataTable) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

Then('an error message {string}', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

//Update Account Feature


When('the user inputs the old password {string}, inputs the new password {string} and confirms the new password {string}', function (string, string2, string3) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('the user\'s new password is now {string} and a confirmation message {string} is raised', function (string, string2) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});


When('the user inputs the wrong old password {string},inputs the new password {string} and confirms the new password {string}', function (string, string2, string3) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('an error message {string} is raised', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

//Update Drink Engagement1 Feature

Given('the following drink exists in the system:', function (dataTable) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
When('User {string} favourites the drink {string}', function (string, string2) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('the drink {string} shall be in User {string}\'s catalogue', function (string, string2) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

Then('the drink {string} shall have {int} more like', function (string, int) {
// Then('the drink {string} shall have {float} more like', function (string, float) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

//Update Drink Recipe Feature

When('the user changes the recipe\'s status', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('the recipe status shall be private and a confirmation message UPDATE-RECIPE-STATUS shall be raised', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

Then('the recipe status shall be public and a confirmation message UPDATE-RECIPE-STATUS shall be raised', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});


When('the user modifies the drink Fireball by adding {string}', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('the {string} shall be added to {string}', function (string, string2) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('the {string} shall be displayed', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});


When('the user modifies the drink Mojitos by adding {string}', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('the new ingredient shall not be added', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('the error message UPDATE-RECIPE-DUPLICATE shall be raised', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

When('the user modifies the drink <{string}> by adding {string}', function (string, string2) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('the {string} shall be removed from {string}', function (string, string2) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

Given('the user is logged into an admin account with username {string}', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
When('the user presses the delete button on a drink recipe', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('there shall be {int} less drink recipe in the system', function (int) {
// Then('there shall be {float} less drink recipe in the system', function (float) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});



When('the User {string} requests to view the drinks in alphabetical order', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('the list of drinks is displayed in alphabetical order', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});


When('the User {string} requests to view drinks by newest', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('the list of drinks is displayed in order of their creation', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

When('the User {string} requests to view drinks by their rating', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('the list of drinks is displayed in descending order of their rating', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});


When('the User {string} requests to view drinks from a given rating', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});
Then('the list of drinks within the given range is displayed', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

//View Favourite Drinks Feature


  Given('the user {string} is logged in', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
  Given('that the user {string} has favourited the drink {string}', function (string, string2) {
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


  When('the users requests to view their favourites', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
  Then('no drinks shall be displayed.', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Given('the user is logged into an account with username {string} and password {string}', function (string, string2) {
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

//Accidentally Undefined Ones
Given('the user {string} is logged into their account', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });