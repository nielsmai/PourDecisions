Feature: View Favourites

As a user I want to view all drink recipes that I marked as favourites so 
that I can have easy access to favourite recipes

Background:
        Given the following accounts exist in the system:
                | username  | password  |
                | username1 | password1 |
                | user1     | password11|
        Given the following drinks exist in the system:
                |name       | likes | ingredients                          | author | status |
                |Mint Julep | 50     | Bourbon, Simple syrup, mint, whiskey | User1  | private|          
        
Scenario: View favourites successfully

        I should be able to view my favourites

        When the user "username1" with password "password1" is logged into their account
        Given that the user "username1" has favourited the drink "<drink>"
        When the user requests to view their favourites
        Then the drink "<drink>" shall be displayed
        Examples:
                |drink      |
                |Mint Julep | 

Scenario: View favourites unsuccessfully when it has no items

        When the user "username1" with password "password1" is logged into their account
        And the user requests to view their favourites
        Then no drinks shall be displayed.
              
