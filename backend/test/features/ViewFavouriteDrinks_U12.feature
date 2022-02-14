Feature: View Favourites

As a user I want to view all drink recipes that I marked as favourites so 
that I can have easy access to favourite recipes

Background:
        Given the following account exists in the system:
                | username  | password  |
                | username1 | password1 |
                | user1     | pass1     |
        Given the following drinks exist in the system:
                |name       | ingredients                          | rating | author | status |
                |Mint Julep | Bourbon, Simple syrup, mint, whiskey | 50     | User1  | private|          
        Given the user "username1" is logged in
        
Scenario: View favourites successfully

        I should be able to view my favourites

        Given that the user "username1" has favourited the drink "<drink>"
        When the user requests to view their favourites
        Then the drink "<drink>" shall be displayed
        Examples:
                |drink      |
                |Mint Julep | 

Scenario: View favourites uncessfully when it has no items

        When the users requests to view their favourites
        Then no drinks shall be displayed.
              