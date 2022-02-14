// import assert from 'assert';
// import { Given, When, Then }  from '@cucumber/cucumber';

// import { createUser, getAllUsers, logIn } from '../../../controllers/users';

const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { createUser } = require('../../../controllers/users');
const { login } = require('../../../controllers/login');
const { getAllUsers } = require('../../../controllers/users');

let initialusers;
let errorMessage;

// Scenario #1
Given('the username {string} does not already exist:', function (string) {
	initialusers = getAllUsers().length;
 });

When ('I create a user account with username {string} and password {string2}', function (string, string2) {
	try {
		createUser({"username": string, "password": string2});	
	} catch (e) {
		errorMessage = e.message;
	}
	return `pending`;
});

Then ('a new user account shall be created', function () {
	const user = getAllUsers();
	initialusers++;
	assert(user.length == initialusers);
});


Then ('the account shall have username {string} and password {string2}', function (string, string2) {
	const user = getAllUsers()[getAllUsers().length-1];
	assert(user.username);
	assert(user.password);
});

Then ('I should be logged in as {string}', function (string) {
	const user = getAllUsers()[getAllUsers.length-1];
	const username = user.username;
	const password = user.password;
	login(username,password);
});


// Scenario #3-5
Given ('the username "Johnson" already exists', function (string) {
	createUser({"username": "Johnson", "password": "johnsonpassword"});
 });

 Then ('no new user account shall be created', function () {
	assert(getAllUsers().length == initialusers); 
 });

 Then ('an error message {string} shall be raised', function (string) {
	assert(errorMessage == string);
 });

