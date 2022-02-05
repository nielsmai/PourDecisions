Feature: Log out a user account

As a user, I want to be able to log out of other people don't see my private recipes and don't compromise my account

Background: 
	Given the following account exists in the system:
		| username | password      |
		| User1    | userpassword1 |
		| Guest    | guestpassword1|
	
Scenario: Successful logout of the account
	
	User should be logged in their account
  Given the user is logged into an account with username "User1"
	When the user logs out
	Then the user is logged out of the system with a confirmation message "LOGOUT-SUCCESSFUl"     

Scenario: Logout as a guest
	
  Given the user is logged into an account with username "Guest"
	When the user logs out
	Then an error message "LOGOUT-INVALID" shall be raised   
