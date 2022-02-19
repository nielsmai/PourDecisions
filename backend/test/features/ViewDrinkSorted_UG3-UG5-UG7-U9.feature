Feature: View Drink Recipes

As a user or guest
I would like to view drink recipes
So that I can see the details of each cocktail

Background:
    Given the following accounts exist in the system:
        | username | password |
        | User1    | pass1    |
        | User2    | pass2    |
    Given the following drinks exist in the system:
		| name     | ingredients           	                      |rating  | author | status |
		| Fireball | Canadian whisky,sweetener,cinnamon flavouring| 50     | User1  | public |
		| Mojitos  | white rum, sugar,lime juice,soda water,mint  | 100    | User2  | private|
        | Mojitos  | white rum, sugar,lime juice,soda water,mint  | 200    | User2  | private|
	Given the user "User1" with password "pass1" is logged into their account

Scenario: View Drink Recipes in alphabetical order (UG3)
	When the user "User1" requests to view the drinks in alphabetical order
    Then the list of drinks is displayed in alphabetical order 

Scenario: View Drink Recipes by Newest (UG5)
	When the user "User1" requests to view drinks by newest
    Then the list of drinks is displayed in order of their creation

Scenario: View Drink Recipes by descending ratings (UG7)
	When the user "User1" requests to view drinks by their rating
    Then the list of drinks is displayed in descending order of their rating

# Scenario: View Drink Recipes by rating threshold (U9)
#     When the user "User1" requests to view drinks from a given rating
#     Then the list of drinks within the given range is displayed
