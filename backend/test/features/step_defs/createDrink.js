import assert from 'assert';
import { Given, When, Then }  from '@cucumber/cucumber';

import { createUser } from '../../../controllers/users';
import { createDrink } from '../../../controllers/drinks';

Given("the following account exists in the system", function () {
    createUser({"username": "User1", "password": "userpassword1"});    
})

Given("the following drink recipes exist in the system", function () {
    createDrink({
        "name": "Fireball",
        "likes": 0,
        "ingredients": Canadian whisky, sweetener, cinnamon flavouring,
        "author": "User1"
    });

})

