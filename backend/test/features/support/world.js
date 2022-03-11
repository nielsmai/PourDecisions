const { setWorldConstructor, World } = require('@cucumber/cucumber')
var {setDefaultTimeout} = require('@cucumber/cucumber');

setDefaultTimeout(2 * 60 * 1000);

class CustomWorld extends World {

    errorMsg = ""
    confirmMsg = ""
    listDrinks = []
    currentUser = ""
    constructor(options) {
        super(options)
    }
    
}

setWorldConstructor(CustomWorld)

