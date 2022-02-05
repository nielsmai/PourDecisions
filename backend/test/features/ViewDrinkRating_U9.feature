Feature: View rating

As a user I would like to view the like count of a drink while browsing the catalogue so that 
I can see how other users consider this drink in terms of its quality and taste

Background: 

Given the following account exists in the system:
        | username   | password   |
        | <username> | <password> |
        
Scenario: View rating of an existing drink

I should be able to view the rating of an existing drink successfully

Given I am logged in as <user>
And <drink> exists with rating <likeNum>
When I click "View Ratings"
Then I should see <likeNum>