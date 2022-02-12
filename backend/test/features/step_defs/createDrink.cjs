import assert from 'assert';
import { Given, When, Then }  from '@cucumber/cucumber';

import { createUser } from '../../../controllers/users';
import { createDrink, createIngredient, createRecipe } from '../../../controllers/drinks';

Given('the following account exists in the system:', function (dataTable) {
    const username = dataTable.username;
    const password = dataTable.password;
    assert(username == "User1");
    assert(password == "userpassword1");
    // createUser({"username": "User1", "password": "userpassword1"});    
});

Given('the following drink recipes exist in the system:', function (dataTable) {
    const name = "Fireball";
    const tag = "ALCOHOLIC";
    const author = "User1";
    const rating = 0;
    const recipe = createRecipe({
        "ingredients": [
            createIngredient({
                "name": "Canadian whisky",
                "ingredientType": "LIQUOR"
            }),
            createIngredient({
                "name": "sweetener",
            }),
            createIngredient({
                "name": "cinnamon flavouring",
            })
        ]
    });
    createDrink({
        "name": name,
        "tag": tag,
        "author": author,
        "rating": rating,
        "recipe": recipe
    });

})

Given("the user is logged into an account with username {string}", function (string) {
    return pending;
})

When ("the user creates a new drink recipe with the name {string} and the ingredients {string2}])", function (string, string2) {
    return pending;
})

Then ("the new drink recipe is added to the system", function () {
    
})
