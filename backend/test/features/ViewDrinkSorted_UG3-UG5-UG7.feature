Feature: View Drink Recipes

As a user or guest
I would like to view drink recipes
So that I can see the details of each cocktail

Background:
	Given a User <user> is logged in or a Guest <guest> is on the website

Scenario: View Drink Recipes in alphabetical order (UG3)
	When the User <user> or Guest <guest> clicks on the "View Drink Catalogue" button
    Then the User <user> or Guest <guest> is redirected to the drink catalogue page
    And the list of drinks are displayed in alphabetical order 

Scenario: View Drink Recipes by Newest Added option (UG5)
	When the User <user> or Guest <guest> clicks on the "View Drink Catalogue" button
    And the User <user> or Guest <guest> selects "Newest Added" filter
    Then the User <user> or Guest <guest> is redirected to the drink catalogue page
    And the list of drinks are displayed by newest date

Scenario: View Drink Recipes by like count (UG7)
	When the User <user> or Guest <guest> clicks on the "View Drink Catalogue" button 
	And the User <user> or Guest <guest> selects "Like Count" filter
    Then the User <user> or Guest <guest> is redirected to the drink catalogue page
    And the list of drinks are displayed by their like count in descending order