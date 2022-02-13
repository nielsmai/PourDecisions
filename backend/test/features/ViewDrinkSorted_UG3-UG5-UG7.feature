Feature: View Drink Recipes

As a user or guest
I would like to view drink recipes
So that I can see the details of each cocktail

Background:
    Given the following account exists in the system:
        | username | password |
        | User1    | pass1    |
        | User2    | pass2    |
    Given the following drink recipes exist in the system:
		| name     | ingredients           	                      |rating  | author | status |
		| Fireball | Canadian whisky,sweetener,cinnamon flavouring| 50     | User1  | public |
		| Mojitos  | white rum, sugar,lime juice,soda water,mint  | 100    | User2  | private|
        | Mojitos  | white rum, sugar,lime juice,soda water,mint  | 200    | User2  | private|
    
	Given the user with username "username" and password "password" is logged into their account

Scenario: View Drink Recipes in alphabetical order (UG3)
	When the User "User1" requests to view the drinks in alphabetical order
    Then the list of drinks are displayed in alphabetical order 

Scenario: View Drink Recipes by Newest Added option (UG5)
	When the User <user> or Guest <guest> clicks on the "View Drink Catalogue" button
    And the User <user> or Guest <guest> selects "Newest Added" filter
    Then the User <user> or Guest <guest> is redirected to the drink catalogue page
    And the list of drinks are displayed by newest date

Scenario: View Drink Recipes by like count (UG7)
	When the User "User1" requests to view drinks by their like count
    Then the list of drinks "<drinks>" is displayed in descending order of like count

    