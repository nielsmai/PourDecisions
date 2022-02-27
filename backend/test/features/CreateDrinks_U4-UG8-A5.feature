Feature: Create drinks

As a user, I want to be able to create a custom drink recipe so that I can I can share it within the platform for users and guests to refer to it
As a user or guest, I would like to generate drink recipes, so that I can recreate them

Background: 
	Given the following accounts exist in the system:
		| username | password      |
		| User1    | userpassword1 | 
	Given the following drinks exist in the system:
		| name     | likes | ingredients | author | status |
		| Fireball | 0     | Canadian whisky, sweetener, cinnamon flavouring | User1  | public |
	
Scenario: User successfully creates a new drink recipe
	
	Drink shall be successfully created

	When the user "User1" with password "userpassword1" is logged into their account
	And the user "User1" creates a new drink recipe with the name "Daiquiri" and the ingredients "rum,citrus juice,sugar"
	Then the new drink "Daiquiri" is added to the system
	
Scenario Outline: User unsuccessfully creates a new drink

	Drink shall not be successfully created

	When the user "User1" with password "userpassword1" is logged into their account
	And the user "User1" creates a new drink recipe with the name "<name>" and the ingredients "<ingredients>"
	Then an error message "<error>" shall be raised

        Examples: 
    | name     | ingredients            | error                          |
    |          | rum,citrus juice,sugar | CREATE-DRINK-NAME-EMPTY        |
    | Daiquiri |                        | CREATE-DRINK-INGREDIENTS-EMPTY |
  
# Scenario: A user views a randomly generated Drink Recipe from the catalogue 
# 	Given User "user1" is logged into their account
#   When User "user1" generates a new recipe
#   Then there shall be 1 more recipe in the system

  #Not sure what to check in this case




