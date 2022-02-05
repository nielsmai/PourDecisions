Feature: Search a custom drink

As a user I would like to search for custom drinks by the name of a user so that
if this user is known for making great recipes, I can browse their other drink recipes and try some new ones

Given the following account exists in the system:
        | username   | password   |
        | <username> | <password> |
		
Scenario: Search a custom drink with an existing user

I should be able to view all drinks created by the searched user with their ratings successfully

	Given I am logged in as <user>
	When I search a drink with <user>
	Then I should see  
			|drink       | rating   |
			|Margarita   | 7 likes  |
			|Kiwi Mojito | 12 likes |

Scenario: Search a custom drink with an user which does not exist

I should not be able to view all drinks created by the user which does not exist

	Given I am logged in as <user>
	When I search a drink with <user>
	Then I should receive an error message