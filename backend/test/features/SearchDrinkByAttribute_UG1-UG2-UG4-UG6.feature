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

	When the user provides the drink name "martini"
  Then the drink with name "martini", likes "60" shall be returned

Scenario: Search Drink Recipes by invalid Name as User or Guest (Error flow)

	When the user "user1" inputs the name of a Drink <invalidDrink> in the search bar
  And the user <clicks on the search button
  Then a "RECIPE-NOT-FOUND" error message is found

  Examples:
    | invalidDrink        |
    | Long Island ice tea |

Scenario: Search Drink Recipes by list of Ingredients (UG2)
#Needs more examples
	When the user "user1" inputs a list of ingredients <listOfIngredients>
    And the user "user1" clicks on the search button
    Then the drink catalogue page is filtered
    And lists all drink recipes <drinks> containing a combination of the inputted ingredients
  Examples:
	  | listOfIngredients                                            | drinks                                         |
    | Lemon, lime juice, lemonade, soda water, lemon juice, orange | Jogger, Lemime, Orange & Lemon Crystal Martini |
   
Scenario: Search Drink Recipes by Criteria (UG4)
	When the user "user1" inputs a list of restrictions <listOfRestrictions>
  And the user "user1" clicks on the search button
  Then the drink catalogue page is filtered
  And lists all drink recipes <drinks> matching the inputted restrictions
    
  Examples:
    | listOfRestrictions         | drinks                                         |
    | Non-alcoholic, fruit-based | Jogger                                         |
    | fruit-based                | Jogger, Lemime, Orange & Lemon Crystal Martini |
    |                            | Jogger, Lemime, Orange & Lemon Crystal Martini |


Scenario: Search Drink Recipes by like count as a User (UG6)

	When the user "user1" selects a range of like counts <range>
  Then the drink catalogue page is filtered
  And displays all the drink recipes <drinks> within that range <range>
  
  Examples:
    | range | drinks                         |
    | 1-50  | Jogger, Lemime                 |
    | 50-100| Orange & Lemon Crystal Martini |


