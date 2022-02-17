Feature: Search Drink Recipes
As a user or guest
I would like to search for drink recipes
So that I can recreate them using specific ingredients in mind

# Since guests and users have the same searching privileges
# Test are only written from user perspective

Background:
  Given the following accounts exist in the system:
    | username | password |
    | user1    | 12345678 |
  Given the following drinks exist in the system:
  #More to be added later
    | name                           | likes | ingredients            | Restrictions               |
    | Jogger                         | 30    | Soda water, Lime Juice | Non-alcoholic, fruit-based |
    | Lemime                         | 20    | Lime juice, Lemon Juice| fruit-based                |
    | Orange & Lemon Crystal Martini | 60    | Orange, Lemon, Vodka   | fruit-based                |            
 
  Given the user "user1" with password "12345678" is logged into their account
    
Scenario: Search Drink Recipes by Name as a User or Guest(UG1)

	When the user "user1" provides the drink name "martini"
  Then the drink with name "martini", likes "60" shall be returned

Scenario: Search Drink Recipes by invalid Name as User or Guest (Error flow)

	When the user "user1" provides the drink name "<invalidDrink>"
  Then an error message "RECIPE-NOT-FOUND" shall be raised 

  Examples:
    | invalidDrink        |
    | Long Island ice tea |

Scenario: Search Drink Recipes by list of Ingredients (UG2)
#Needs more examples
	When the user "user1" provides a list of ingredients "<listOfIngredients>"
    And the user "user1" requests to view the drinks
    Then the list of drinks shall be "<drinks>"
  Examples:
	  | listOfIngredients                                            | drinks                                         |
    | Lemon, lime juice, lemonade, soda water, lemon juice, orange | Jogger, Lemime, Orange & Lemon Crystal Martini |
   
Scenario: Search Drink Recipes by Criteria (UG4)
	When the user "user1" provides a list of restrictions "<listOfRestrictions>"
  And the user "user1" requests to view the drinks
  Then the list of drinks shall be "<drinks>"
    
  Examples:
    | listOfRestrictions         | drinks                                         |
    | Non-alcoholic, fruit-based | Jogger                                         |
    | fruit-based                | Jogger, Lemime, Orange & Lemon Crystal Martini |
    |                            | Jogger, Lemime, Orange & Lemon Crystal Martini |


Scenario: Search Drink Recipes by like count as a User (UG6)

	When the user "user1" provides a like range of "<range>"
  And the user "user1" requests to view the drinks
  Then the list of drinks shall be "<drinks>"
  
  Examples:
    | range | drinks                         |
    | 1-50  | Jogger, Lemime                 |
    | 50-100| Orange & Lemon Crystal Martini |


