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
    | name                           | likes | ingredients            | author | status | tag      |
    | Jogger                         | 30    | Soda water,Lime Juice | user1  | public | MOCKTAIL |
    | Lemime                         | 20    | Lime juice,Lemon Juice| user1  | public | MOCKTAIL |
    | Orange & Lemon Crystal Martini | 60    | Orange,Lemon,Vodka   | user1  | public | ALCOHOLIC|      
    
Scenario: Search Drink Recipes by Name as a User or Guest(UG1)

  When the user "user1" with password "12345678" is logged into their account
	And the user "user1" provides the drink name "martini"
  Then the drink with name "Orange & Lemon Crystal Martini", likes "60" shall be returned

Scenario: Search Drink Recipes by invalid Name as User or Guest (Error flow)

  When the user "user1" with password "12345678" is logged into their account
	And the user "user1" provides the drink name "<invalidDrink>"
  Then an error message "RECIPE-NOT-FOUND" shall be raised 
  Examples:
    | invalidDrink        |
    | Long Island ice tea |

Scenario: Search Drink Recipes by list of Ingredients (UG2)
  When the user "user1" with password "12345678" is logged into their account
	And the user "user1" provides a list of ingredients "<listOfIngredients>"
  Then the list of drinks shall be "<drinks>"

  Examples:
	  | listOfIngredients                                       | drinks                                       |
    | Lemon,Lime juice,Lemonade,Soda water,Lemon juice,Orange | Jogger,Lemime,Orange & Lemon Crystal Martini |
   
Scenario: Search Drink Recipes by Tag (UG4)
  When the user "user1" with password "12345678" is logged into their account
	And the user "user1" provides a list of tags "<listOftags>"
  Then the list of drinks shall be "<drinks>"
    
  Examples:
    | listOftags                 | drinks                                |
    | MOCKTAIL                   | Jogger,Lemime                        |
    | ALCOHOLIC                  | Orange & Lemon Crystal Martini        |


Scenario: Search Drink Recipes by like count as a User (UG6)

  When the user "user1" with password "12345678" is logged into their account
	And the user "user1" provides a like range of "<range>"
  Then the list of drinks shall be "<drinks>"
  
  Examples:
    | range | drinks                         |
    | 20    | Jogger,Orange & Lemon Crystal Martini |
    | 30    | Orange & Lemon Crystal Martini |


