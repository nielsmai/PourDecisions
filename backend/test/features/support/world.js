const { setWorldConstructor, World } = require('@cucumber/cucumber')

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

