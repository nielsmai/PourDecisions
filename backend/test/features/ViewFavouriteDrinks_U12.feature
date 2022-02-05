Feature: View Favourites

As a user I want to view all drink recipes that I marked as favourites so 
that I can have easy access to favourite recipes

Given the following account exists in the system:
        | username   | password   |
        | <username> | <password> |
        
Scenario: View favourites when empty

I should not be able to view my favourites

Given I am logged in as <user>
But My favourites is empty
When I click "My Favourites"
Then I should see an error message 

Scenario: View favourites when it has at least one item

I should  be able to view all my favourites

Given I am logged in as <user>
And My favourites is not empty
When I click "My Favourites"
Then I should see 
                    |drink       | 
			        |Margarita   | 
			        |Kiwi Mojito | 