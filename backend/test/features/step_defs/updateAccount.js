import assert from 'assert';
import { Given, When, Then , And}  from '@cucumber/cucumber';

import { createUser, getAllUsers, updateUser, logIn } from '../../../controllers/users';

let errorMessage;

Given ('the following account exists in the system:', function (dataTable) {
    const username = dataTable.username;
    const password = dataTable.password;
    assert(username == "User1");
    assert(password == "userpassword1");
    createUser({"username": "User1", "password": "userpassword1"});    
});

And ('the user is logged into an account with username "User1"', function () {
	logIn("User1","userpassword1");
});

// Scenario #1
When ('the user inputs the old password "userpassword1", inputs the new password "userpassword2" and confirms the new password "userpassword2"', function() {
	try {
		//updateUser();	
	} catch (e) {
		errorMessage = e.message;
	}
});

Then ("the user's new password is now 'userpassowrd2' and a confirmation message 'PASSWORD-CHANGE-SUCCESSFUl' is raised", function () {
	const user = getAllUsers[0];
	assert(user.password == "userpassword2");
});

// Scenario #2
Then ('an error message {string} is raised', function (string) {
	assert(errorMessage == string);
});
