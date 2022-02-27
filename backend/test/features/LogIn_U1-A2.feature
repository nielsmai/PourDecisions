Feature: LogIn

As a user, I want to be able to log into my user account so that I can have access to my favorites, my custom drinks, and see what I have liked so far on to of all usual guest features
As an admin, I want to be able to log into my user account .... (to be added)

Background: 
	Given the following accounts exist in the system:
		| username | password      |
		| User1    | userpassword1 | 
	
Scenario: Successful login with correct credential
	
	User should be logged in their account

	When the user logs in using "<username>" and "<password>"
	Then the user shall be logged in
    
    Examples: 
    | username | password      |
    | User1    | userpassword1 |

Scenario Outline: Unsuccessful login with incorrect or missing credentials

	User should not be logged in their account

	When the user logs in using "<username>" and "<password>"
	Then the user is not logged in 
	And an error message "<error>" shall be raised

  Examples: 
    | username | password      | error             |
    | User1    |               | LOGIN-FIELD-EMPTY |
    |          | userpassword1 | LOGIN-FIELD-EMPTY |
    | User1    | userpassword  | LOGIN-INVALID     |     
    | User     | userpassword1 | LOGIN-INVALID     |   


