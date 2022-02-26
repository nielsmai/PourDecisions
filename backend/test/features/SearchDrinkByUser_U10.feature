Feature: Search a custom drink

As a user I would like to search for custom drinks by the name of a user so that
if this user is known for making great recipes, I can browse their other drink recipes and try some new ones
Background:
    Given the following accounts exist in the system:
        | username   | password   |
        | user1 | userpassword1 |
		
	Given the following drinks exist in the system:
		| name     | likes | ingredients | author |
        | Margarita| 7     | yep         | user1  |
        | Kiwi Mojito | 12     | kiwi         | user1  |
        | Random drink | 23 | blah | notuser1 |

    Given the user "user1" with password "userpassword1" is logged into their account

Scenario: Search a custom drink with an existing user

I should be able to view all drinks created by the searched user with their ratings successfully

	When the user searches a drink made by "user1"
	Then the list of drinks shall be "Margarita, Kiwi Mojito"

Scenario: Search a custom drink with a user which does not exist

I should not be able to view all drinks created by the user which does not exist

	When the user searches a drink made by "nonexistentuser"
	Then an error message "SEARCH-INVALID-USER" shall be raised
