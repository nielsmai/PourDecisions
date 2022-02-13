Feature: View recipe of custom drinks 

As a user, I want to be able to view a list of all of my public and private custom made drink recipes so that I have an easy access to all of my custom made recipes, like a personal recipe book

Background: 
	Given the following account exists in the system:
		| username | password      |
		| User1    | userpassword1 |
		| User2    | userpassword2 |
		| User3    | userpassword3 |
	Given the following drink recipes exist in the system:
		| name     | ingredients           	                       | author |
		| Fireball | Canadian whisky,sweetener,cinnamon flavouring | User1  |
		| Mojitos  | white rum, sugar,lime juice,soda water,mint   | User2  |
	
	
	Scenario: User view all of their custom drink recipes
	
	The list of custom drink, private and public, is displayed

	Given the user is logged into an account with username "<username>" and password "<password>"
	When the user displays the list of custom drinks
	Then the custom drinks <"customdrinklist"> with author "<username>" shall be displayed
	
Examples:
	| username | password      | customdrinklist |
	| User1    | userpassword1 | Fireball        |
	| User2    | userpassword1 | Mojitos         |
	| User3    | userpassword1 |                 |



