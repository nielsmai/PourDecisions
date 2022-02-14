// import assert from 'assert';
// import { Given, When, Then }  from '@cucumber/cucumber';
const assert = require('assert');
const { Given, When, Then, DataTable } = require('@cucumber/cucumber');

const createUser = require('../../../controllers/users');
const { createDrink, createIngredient, createRecipe } = require('../../../controllers/drinks');

// import { createUser } from '../../../controllers/users';
// import { createDrink, createIngredient, createRecipe } from '../../../controllers/drinks';

Given('the following account exists in the system:', function (dataTable) {
    const username = dataTable.rows()[0][0];
    const password = dataTable.rows()[0][1];
    assert(username == "User1");
    assert(password == "userpassword1");
    // this causes some issues 
    // createUser({"username": username, "password": password});    
    
    // wtf do i do now ???
    // query database ????

});


Given('the following drink recipes exist in the system:', function (dataTable) {
    const name = dataTable.rows()[0][0];
    const author = dataTable.rows()[0][3];
    const rating = dataTable.rows()[0][1];
    // euh yeah idk this is harder to implement with dataTable
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
    assert(name == "Fireball");
    assert(author == "User1");
    assert(rating == 0);
    // createDrink({
    //     "name": name,
    //     "author": author,
    //     "rating": rating,
    //     "recipe": recipe
    // });
    // same as above
})

Given("the user is logged into an account with username {string}", function (string) {
    return pending;
})

When ("the user creates a new drink recipe with the name {string} and the ingredients {string}])", function (string, string2) {
    return pending;
})

Then ("the new drink recipe is added to the system", function () {
    return pending;    
})
