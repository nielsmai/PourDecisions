const { setWorldConstructor, World } = require('@cucumber/cucumber')

class CustomWorld extends World {
    
    errorMsg = ""
    confirmMsg = ""
    listDrinks = []

    constructor(options) {
        super(options)
    }
    
}

setWorldConstructor(CustomWorld)

