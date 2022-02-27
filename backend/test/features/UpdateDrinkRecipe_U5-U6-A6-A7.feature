Feature: Update Recipe

As a user, I want to be able to update the recipes I have made by changing the  visibility of my custom drink from private to public and vice-versa
so that I can use the platform as a personal drink recipe book for recipes I do not wish to share, or so that I can share to the public if I change my mind.
Additionally I want to be able to add and remove ingredients from my recipes so that I can make adjustments to my recipes to improve them.
As an admin I want to be able to delete recipes from the drink catalogue.

#This combines U5 and U6

Background: 
	Given the following accounts exist in the system:
		| username | password      |
		| User1    | userpassword1 | 
  		| admin    | adpassword1   |
    # Given the user "admin" with password "adpassword1" is an admin
	Given the following drinks exist in the system:
		| name       | rating | ingredients                                     | author | status |
		| Fireball   | 0 | Canadian whisky, sweetener, cinnamon flavouring | User1  | public |
		| Mint Julep | 0 |Bourbon, Simple syrup, mint, whiskey            | User1  | private|
		| Mojitos    | 0 | white rum, sugar,lime juice,soda water,mint     | User1  | public |
	
Scenario Outline: User successfully changes status of the recipe
	
	The recipe should be private and should not be able to be seen by other

	When the user "User1" with password "userpassword1" is logged into their account
	And the user changes the "<drink>"'s status to "<status>"
	Then the recipe status shall be "<status>" and a confirmation message "<confirmation>" shall be raised

	Examples:
    | drink     | status | confirmation         |
    | Fireball   | private| UPDATE-RECIPE-STATUS |
    | Mint Julep | public | UPDATE-RECIPE-STATUS |

Scenario Outline: User successfully adds an ingredient to the recipe
	
	The ingredients list is updated

	When the user "User1" with password "userpassword1" is logged into their account
	And the user modifies the drink "<name>" by adding a new ingredient "<newingredient>"
	Then the new ingredient "<newingredient>" shall be added to drink "<name>"
	Then the new ingredients list "<newingredientlist>" shall be displayed
	
	Examples:
    | name     | ingredients                                   | newingredient | newingredientlist                                  |
    | Fireball | Canadian whisky,sweetener,cinnamon flavouring | lime          | Canadian whisky,sweetener,cinnamon flavouring,lime |
    | Mojitos  | white rum, sugar,lime juice,soda water,mint   | lime	       | white rum, sugar,lime juice,soda water,mint,lime   |

Scenario Outline: User adds duplicate ingredient to the recipe
	When the user "User1" with password "userpassword1" is logged into their account
	And the user modifies the drink "<name>" by adding a new ingredient "<newingredient>"
	Then the new ingredient "<newingredient>" shall not be added to drink "<name>"
  	And an error message "<error>" shall be raised

  Examples:
    | name    | ingredients                                 | newingredient | newingredientlist                                | error                   |
    | Mojitos | white rum, sugar,lime juice,soda water,mint | mint          | white rum, sugar,lime juice,soda water,mint,lime | UPDATE-RECIPE-DUPLICATE |

Scenario Outline:  User successfully removes an ingredient to the recipe
	
	The ingredients list is updated

  	When the user "User1" with password "userpassword1" is logged into their account
	And the user modifies the drink "<name>" by removing the ingredient "<oldingredient>"
	Then the ingredient "<oldingredient>" shall be removed from the drink "<name>"

	Examples:
    | name     | ingredients                                   | oldingredient | newingredientlist                   |
    | Fireball | Canadian whisky,sweetener,cinnamon flavouring | sweetener     | Canadian whisky,cinnamon flavouring |
    | Mojitos  | white rum, sugar,lime juice,soda water,mint   | lime juice    | white rum, sugar,soda water,mint    |
    

Scenario: Admin deletes a drink recipe
	When the user "admin" with password "adpassword1" is logged into their account
   	And the admin "admin" deletes the drink "Fireball"
   	Then there shall be "1" less drink recipe in the system



