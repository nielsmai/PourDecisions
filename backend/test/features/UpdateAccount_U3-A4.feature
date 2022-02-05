Feature: Change password

As a user, I want to be able to change the password of my user account so that I can I can change to an easier or more complicated password

Background: 
	Given the following account exists in the system:
		| username | password      |
		| User1    | userpassword1 | 
	And the user is logged into an account with username "User1"

	
Scenario: Successful password modification
	
	User's password should have changed
	
	When the user inputs the old password "userpassword1", inputs the new password "userpassword2" and confirms the new password "userpassword2"
	Then the user's new password is now "userpassowrd2" and a confirmation message "PASSWORD-CHANGE-SUCCESSFUl" is raised

	
Scenario Outline: Unsuccessful password modification
	
	When the user inputs the wrong old password "<oldpassword>",inputs the new password "<newpassword>" and confirms the new password "<newpasswordconfirm>"
	Then an error message "<error>" is raised

  Examples:
	  | oldpassword   | newpassword   | newpasswordconfirm | error                            |
	  |               | userpassword2 | userpassword2      | PASSWORD-CHANGE-OLD-EMPTY        |
	  | userpassword1 |               | userpassword2      | PASSWORD-CHANGE-NEW-EMPTY        |
	  |               | userpassword2 |                    | PASSWORD-CHANGE-CONFIRM-EMPTY    |
	  | userpassword0 | userpassword2 | userpassword2      | PASSWORD-CHANGE-OLD-INVALID      |
	  | userpassword1 | userpassword2 | userpassword3      | PASSWORD-CHANGE-CONFIRM-NO-MATCH |
