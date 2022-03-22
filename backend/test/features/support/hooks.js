const { AXIOS } = require('./axios.config')
const { BeforeAll, After, AfterAll } = require('@cucumber/cucumber');

BeforeAll(async function () {

    try {

        var res = await AXIOS.delete('/drinks/')
        var res = await AXIOS.delete('/drinks/ingredients')
        var res = await AXIOS.delete('/drinks/recipes')
        var res = await AXIOS.delete('/users/')
    } catch (err) {
        console.log("BeforeAll error: ", err.message)
    }
})

After(async function () {
    try {
        var res = await AXIOS.delete('/drinks/')
        var res = await AXIOS.delete('/drinks/ingredients')
        var res = await AXIOS.delete('/drinks/recipes')
        var res = await AXIOS.delete('/users/')
    } catch (err) {
        ("After error: ", err.message)
    }

})

AfterAll(async function () {

    try {
        var res = await AXIOS.delete('/drinks/')
        var res = await AXIOS.delete('/drinks/ingredients')
        var res = await AXIOS.delete('/drinks/recipes')
        var res = await AXIOS.delete('/users/')
    } catch (err) {
        ("AfterAll error: ", err.message)
    }
})
