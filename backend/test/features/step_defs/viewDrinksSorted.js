import assert from 'assert';
import { Given, When, Then }  from '@cucumber/cucumber';

 Given('the following account exists in the system:', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Given('the following drink recipes exist in the system:', function (dataTable) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Given('the user with username {string} and password {string} is logged into their account', function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
///////////////////////////////////////////////////////////
/// Alphabetical
/////////////////////////////////////////////////////////
  When('the User {string} requests to view the drinks in alphabetical order', function (string) {    
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('the list of drinks is displayed in alphabetical order', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

///////////////////////////////////////////////////////////
/// Newest
/////////////////////////////////////////////////////////
  When('the User {string} requests to view drinks by newest', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('the list of drinks is displayed in order of their creation', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
///////////////////////////////////////////////////////////
/// Rating
/////////////////////////////////////////////////////////
  When('the User {string} requests to view drinks by their rating', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('the list of drinks is displayed in descending order of their rating', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });