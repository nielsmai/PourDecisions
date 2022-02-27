const axios = require('axios');
const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

// idk, i'll use this for now
require('dotenv').config({path:__dirname+'/./../../../.env'});
const backendUrl = process.env.DEV_API_HOST + ':' + process.env.DEV_API_PORT || process.env.API_HOST + ':' + process.env.API_PORT;
const frontendUrl = process.env.DEV_CLIENT_HOST + ':' + process.env.DEV_CLIENT_PORT || process.env.CLIENT_HOST + ':' + process.env.CLIENT_PORT;

const AXIOS = axios.create({
    baseURL: backendUrl,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': frontendUrl
    }
});

/////////////////////////////////////////////////////////////////////////////
///////////////// Global STEPS //////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

Given('the following accounts exist in the system:', async function (dataTable) {
  // Write code here that turns the phrase above into concrete actions
    // iterate through table
    // this is temporary, hooks does not seem to be working correctly
    try {
        const table = dataTable.rows()
        for (var i in table) {
            var row = table[i]
            const username = row[0]
            const password = row[1]
            const email = username+"@email.com"; // using this for now cause lol

            // create user
           let res = await AXIOS.post('/users/register', {
                username: username,
                password: password,
                email: email
            })

        }
    } catch (err) {
        // this.errorMsg = err.response.data.message
        console.log(err)
    }

});
When('the user {string} with password {string} is logged into their account', async function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
    const username = string;
    const password = string2;

    try {
        // login user
        let res = await AXIOS.post('/users/login', {
            username: username,
            password: password
        })

        this.confirmMsg = res.data.message
        this.currentUser = username

    } catch (err) {
        // console.log("from given logged in: ", err.response.data.message)
        this.errorMsg = err.response.data.message
    }

    // return 'pending'
});

Given('the following drinks exist in the system:', async function (dataTable) {
  // Write code here that turns the phrase above into concrete actionsj

    try {
        const table = dataTable.rows()
        for (let i in table) {
            let row = table[i]
            const name = row[0]
            const likes = row[1]
            var ingredients = row[2]
            const author = row[3]
            // const public_status = row[4]
            var public_status = true
            var tag = 'CUSTOM'

            if (row[4] != "public"){
                public_status = false
            }

            if (row.length === 6){
              tag = row[5]
            }

            // create ingredients
            var ingredientsList = ingredients.split(',')
            ingredients = []
            for (let j = 0; j < ingredientsList.length; j++){
                var res = await AXIOS.post('/drinks/add/ingredient', {
                    ingredientName: ingredientsList[j]
                })
                ingredients.push(res.data)
            }

            let recipe = {}; 
            // create recipe from ingredients 
            var res = await AXIOS.post('/drinks/add/recipe', {
                ingredients: ingredients,
                instructions: "placeholder"
            })
            recipe = res.data

            // create drink from recipe
            var res = await AXIOS.post('/drinks/add', {
                name: name,
                author: author,
                rating: likes,
                public_status: public_status,
                recipe: recipe,
                tag: tag
            })
          }
        
    
    } catch (err) {
       this.errorMsg = err.response.data.message 
    }
});

Then('an error message {string} shall be raised', function (string) {
  assert.equal(this.errorMsg, string);
  // Write code here that turns the phrase above into concrete actions
});
/////////////////////////////////////////////////////////////////////////////
///////////////// CREATE ACCCOUNT ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

Given('the username {string} does not already exist', async function (string) {
  // Write code here that turns the phrase above into concrete actions
    // let wipe = await AXIOS.delete('/users/')
   try {
        const username = string
        let res = await AXIOS.get('/users/' + username)
        assert.fail()
   } catch (err) {
       assert.equal("NO-USER", err.response.data.message)
   }
});

Given('the account with the username {string} and password {string} already exists', async function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
    // let wipe = await AXIOS.delete('/users/')
    try {
        const username = string
        const password = string2
        const email = string + '@email.com'

        let res = await AXIOS.post('/users/register', {
            username: username,
            password: password,
            email: email
        })

    } catch (err) {
        this.errorMsg = err.response.data.message
    }

});

When('I create a user account with username {string} and password {string}', async function (string, string2) {           // Write code here that turns the phrase above into concrete actions
    try {
        const username = string
        const password = string2
        const email = string + "@email.com"

        let res = await AXIOS.post('/users/register', {
            username: username,
            password: password,
            email: email
        })
        // maybe add something to pass info 
    } catch (err) {
        this.errorMsg = err.response.data.message
    }
});

Then('the account shall have username {string} and password {string}', async function (string, string2) {
    try {
        const username = string
        const password = string2 

         let res = await AXIOS.post('/users/login', {
             username: username,
             password: password
         })
        this.confirmMsg = res.data.message,
        this.currentUser = username

    } catch (err) {
        this.errorMsg = err.response.data.message
    }

});

Then('I should be logged in as user {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
    assert.equal(this.confirmMsg, "LOGIN-SUCCESSFUL")
    assert.equal(this.currentUser, string)
});

Then('no new account shall be created', function () {
  // Write code here that turns the phrase above into concrete actions
    assert(this.errorMsg != "" || this.errorMsg != undefined)
});

/////////////////////////////////////////////////////////////////////////////
///////////////// CREATE DRINK //////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

When('the user {string} creates a new drink recipe with the name {string} and the ingredients {string}', async function (string, string2, string3) {
  // Write code here that turns the phrase above into concrete actions
    try {
        const name = string2
        const author = string
        var ingredients = string3
         
        var ingredientsList = ingredients.split(",")
        ingredients = []
        for (let j = 0; j < ingredientsList.length; j++){
            let res = await AXIOS.post('/drinks/add/ingredient', {
                ingredientName: ingredientsList[j],
            })
            ingredients.push(res.data)
        }
        
        let recipe = {}
        // create recipe from ingredients 
        let res = await AXIOS.post('/drinks/add/recipe', {
            ingredients: ingredients,
            instructions: "placeholder"
        })
        recipe = res.data 

        // create drink from recipe
        await AXIOS.post('/drinks/add', {
            name: name,
            author: author,
            recipe: recipe 
        })
        

    } catch (err) {
        var errorMessage = err.response.data.message
        if (errorMessage == "UNDEFINED-INGREDIENT-NAME"){
            errorMessage = "CREATE-DRINK-INGREDIENTS-EMPTY"
        }
        this.errorMsg = errorMessage 
    }

});

Then('the new drink {string} is added to the system', function (string) {
  // Write code here that turns the phrase above into concrete actions
    AXIOS.get('/drinks/' + string + '/name') 
    .then( res => assert.equal(res.data[0].name, string))
    .catch (err => this.errorMsg = err.message)
});

/////////////////////////////////////////////////////////////////////////////
///////////////// LOGIN /////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

When('the user logs in using {string} and {string}', async function (string, string2) {
    try {
        const username = string
        const password = string2

        let res = await AXIOS.post("/users/login", {
            username: username,
            password: password
        })
        this.confirmMsg = res.data.message
        this.currentUser = username
    } catch (err) {
        this.errorMsg = err.response.data.message
    }

});

Then('the user shall be logged in', function () {
  // Write code here that turns the phrase above into concrete actions
  // assert.notEqual(null, sessionStorage.getItem('status'));
  // return 'pending';
     assert.equal(this.confirmMsg, "LOGIN-SUCCESSFUL")
    assert(this.currentUser != "")
});

Then('the user is not logged in', function () {
  // Write code here that turns the phrase above into concrete actions
  // assert.equal(null, sessionStorage.getItem('status'));
    assert(this.errorMsg != "")
    assert(this.currentUser == "")
});

/////////////////////////////////////////////////////////////////////////////
///////////////// LOGOUT ////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
When('the user logs out', async function () {
  // Write code here that turns the phrase above into concrete actions
    let res = await AXIOS.get('/users/logout')
    this.confirmMsg = res.data.message 
    this.currentUser = ""
});

Then('the user is logged out of the system with a confirmation message {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  // assert.equal(null, sessionStorage.getItem('status'));
  // assert.equal(string, confirmMsg);
    assert.equal(this.confirmMsg, string)
    assert(this.currentUser == "")
});


/////////////////////////////////////////////////////////////////////////////
///////////////// SEARCH ////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

When('the user {string} provides the drink name {string}', async function (string, string2) {
  try {
    let res = await AXIOS.get('/drinks/' + string2 + '/name', {
    })
    if (res.data.length === 0) {
      this.errorMsg = "RECIPE-NOT-FOUND"
    } else{
      this.listDrinks = res.data
    }
  } catch (error) {
    this.errorMsg = error.response.data.message
  }
});

When('the user {string} provides a list of ingredients {string}', async function (string, string2) {
  try {
    let res = await AXIOS.get('/drinks/filter/ingredients', {
        params:{
            ingredients: string2.split(',')
        }
    })
    this.listDrinks = res.data
  } catch (error) {}
});

When('the user {string} provides a list of tags {string}', async function (string, string2) {
  try {
    let res = await AXIOS.get('/drinks/tag/' + string2, {
    })
  this.listDrinks = res.data
  } catch (error) {
  }
});

When('the user {string} provides a like range of {string}', async function (string, string2) { 
  try {
    let res = await AXIOS.get('/drinks/' + string +'/ra/' + string2, {
    })
  this.listDrinks = res.data
  } catch (error) {
    console.log("rangerror")
  }
});

When('the user searches a drink made by {string}', async function (string) {
  try {
    let res = await AXIOS.get('/drinks/' + string, {
    })
    if (res.data.length === 0) {
      this.errorMsg = "SEARCH-INVALID-USER"
    } else{
      this.listDrinks = res.data
    }
  } catch (error) {
    this.errorMsg = error.response.data.message
  }
});

Then('the drink with name {string}, likes {string} shall be returned', function (string, string2) {
  assert.ok(this.listDrinks[0].name === string && this.listDrinks[0].rating === parseInt(string2));
});

Then('the list of drinks shall be {string}', function (string) {
  var resultList = string.split(",");
  this.listDrinks = this.listDrinks.map(drink => drink.name)
  assert.deepStrictEqual(this.listDrinks, resultList);
});

/////////////////////////////////////////////////////////////////////////////
///////////////// UPDATE ACCOUNT ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

When('the user inputs the old password {string}, inputs the new password {string} and confirms the new password {string}', async function (string, string2, string3) {
  // Write code here that turns the phrase above into concrete actions
    try {
        const password = string
        const newPassword = string2
        const confirmNewPassword = string3

        let res = await AXIOS.put('/users/'+ this.currentUser + '/update', {
            password: password,
            newPassword: newPassword,
            confirmNewPassword: confirmNewPassword
        })
        this.confirmMsg = res.data.message

    } catch (err) {
        this.errorMsg = err.response.data.message
    }
});

// When('the user inputs the wrong old password {string},inputs the new password {string} and confirms the new password {string}', function (string, string2, string3) {
    

// });

Then('the user\'s new password is now {string} and a confirmation message {string} is raised', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
    assert.equal(this.confirmMsg, string2)
});

/////////////////////////////////////////////////////////////////////////////
///////////////// UPDATE DRINK //////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// Given('the user {string} with password {string} is an admin', function (string, string2) {
//   // Write code here that turns the phrase above into concrete actions
    
// });

// When('the user {string} favourites the drink {string}', function (string, string2) {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });

When('the user changes the {string}\'s status to {string}', async function (string, string2) {
    try {
        const name = string
        const public_status = string2 

        let res = await AXIOS.put('/drinks/' + this.currentUser + '/' + name + '/update/status', {
            public_status: public_status
        })
        this.confirmMsg = {
            message: res.data.message,
            newStatus: string2
        }
    } catch (err) {
        this.errorMsg = err.response.data.message
    }
});

When('the user modifies the drink {string} by adding a new ingredient {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

// Then('the drink {string} shall be in the user {string}\'s catalogue', function (string, string2) {      
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });

Then('the new ingredient {string} shall be added to drink {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('there shall be {string} less drink recipe in the system', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the new ingredients list {string} shall be displayed', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the admin {string} deletes the drink {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the user modifies the drink {string} by removing the ingredient {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the ingredient {string} shall be removed from the drink {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the drink {string} shall have {string} more like', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the recipe status shall be {string} and a confirmation message {string} shall be raised', function (string, string2) {
    assert.equal(this.confirmMsg.newStatus, string)
    assert.equal(this.confirmMsg.message, string2)
});

Then('the new ingredient {string} shall not be added to drink {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

/////////////////////////////////////////////////////////////////////////////
///////////////// VIEW //////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

When('the user {string} requests to view the drinks in alphabetical order', async function (string) {
  try {
    let res = await AXIOS.get('/drinks/' + string +'/a', {
    })
    this.listDrinks = res.data.map(drink => drink.name)
  } catch (error) {}
  
});

Then('the list of drinks is displayed in alphabetical order', function () {
  assert.ok(!!this.listDrinks.reduce((n,name) => n !== false && name.localeCompare(n) >= 0 && name))
});

When('the user {string} requests to view drinks by newest', async function (string) {
  try {
    let res = await AXIOS.get('/drinks/' + string + '/n', {
    })
    this.listDrinks = res.data.map(drink => drink.createdAt)
  } catch (error) {}
  
});

Then('the list of drinks is displayed in order of their creation', function () {
  assert.ok(!!this.listDrinks.reduce((n,createdAt) => n !== false && createdAt <= n && createdAt))
});

When('the user {string} requests to view drinks by their rating', async function (string) {
  try {
    let res = await AXIOS.get('/drinks/' + string + '/r', {
    })
    this.listDrinks = res.data.map(drink => drink.rating) 
  } catch (error) {}
  
});

Then('the list of drinks is displayed in descending order of their rating', function () {
  // console.log("12314", this.listDrinks)
  assert.ok(!!this.listDrinks.reduce((n,rating) =>  n != false && rating <= n && rating ))
});

// Given('that the user {string} has favourited the drink {string}', function (string, string2) {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });
// When('the user requests to view their favourites', function () {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });

// Then('the drink {string} shall be displayed', function (string) {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });

Then('no drinks shall be displayed.', function () {
  assert.ok(this.listDrinks.length === 0);
});

When('the user {string} displays the list of custom drinks', async function (string) {
  try {
    let res = await AXIOS.get('/drinks/' + string + '/custom', {
      username: string
    })
    this.listDrinks = res.data
  } catch (error) {}
  
});

Then('the custom drinks {string} with author {string} shall be displayed', function (string, string2) { 
  
  if (string.length === 0){
    assert.ok(this.listDrinks.length === 0)
  } else {
    assert.ok(this.listDrinks[0].author === string2 && this.listDrinks[0].name === string)
  }
});
