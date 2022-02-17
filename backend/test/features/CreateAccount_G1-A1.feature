Feature: Create an account

As a guest I would like to create a user account so that I can
have my changes saved and be able to create custom drinks and like drinks

Scenario: Create a user account with a unique username and password.

#I should be able to create a user account successfully 

	Given the username "<username>" does not already exist 
	When I create a user account with username "<username>" and password "<password>"
  Then the account shall have username "<username>" and password "<password>"
	Then I should be logged in as user "<username>"

Examples:
| username | password |
| Fiona    | psd22    |

Scenario: Create a user account with an existing username and unique password.

#This doesnt make sense ???
#I should be able to create a user account successfully 

	Given the username "<username>" does not already exist 
	When I create a user account with username "<username>" and password "<password>"
	Then I should be logged in as user "<username>"


Scenario: Create a user account with a existing username.

#I should not be able to create a user account with a username which exists 

	Given the account with the username "<username>" and password "<password>" already exists 
	When I create a user account with username "<username>" and password "<password>"
  Then no new account shall be created
	And an error message "<error>" shall be raised

 Examples:
    | username | password | error                 |
    | Johnson  | 1234     | ACCOUNT-CREATE-INVALID|

Scenario: Create a user account with a unique username and existing password.


#I do not think this is a necessary feature -Loc
#I should not be able to create a user account with a username which exists 

	Given the account with the username "<username>" and password "<password>" already exists
	When I create a user account with username "<username>" and password "<password>"
  Then no new account shall be created
	Then an error message "<error>" shall be raised

Example: 

| username | password | error |
| Fiona    | psd22    | "This username already exists. Please enter a new username."|

#Might be useful
Scenario: Create a new user account with an incomplete form.
  When I create a user account with username "<username>" and password "<password>"
  Then no new account shall be created
  Then an error message "<error>" shall be raised

  Examples:
    | username | password | error                     |
    | Johnson  |          | ACCOUNT-CREATE-EMPTY-PASS |
    |          | apple123 | ACCOUNT-CREATE-EMPTY-USER |