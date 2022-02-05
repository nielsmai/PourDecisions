Feature: Favourite and rating drinks

As a user I would like to mark a drink recipe as favourite so that
I can come back to this recipe often, I can save it to my personal catalogue
As a user I would like to give a like rating to a drink so that I can show my 
appreciation for this recipe: it's good and it's of high quality
Background:
  Given the following account exists in the system:
          | username | password |
          | username | password |
          | user2    | password2|

  Given the following drink exists in the system:
    | name     | likes | ingredients                                     | author | status |
    | Fireball | 50    | Canadian whisky, sweetener, cinnamon flavouring | user2  | public |
  Given I am logged in as <user>

Scenario: Favourite an existing drink 

  I should be able to favourite an existing drink successfully

	Given User "username" is logged into their account
	When User "username" favourites the drink "Fireball"
	Then the drink "Fireball" shall be in User "usernames"'s catalogue
        
Scenario: Rate an existing drink 

I should be able to rate an existing drink successfully

	Given User "username" is logged into their account
	When User "username" favourites the drink "Fireball"
  Then the drink "Fireball" shall have 1 more like



