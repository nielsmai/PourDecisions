// const axios = require('axios');
const AXIOS = require('./axios.config')
const { BeforeAll, After, AfterAll } = require('@cucumber/cucumber');

// require('dotenv').config({path:__dirname+'/./../../../.env'});

// const backendUrl = process.env.DEV_API_HOST + ':' + process.env.DEV_API_PORT || process.env.API_HOST + '+' + process.env.API_PORT;
// const frontendUrl = process.env.DEV_CLIENT_HOST + ':' + process.env.DEV_CLIENT_PORT || process.env.CLIENT_HOST + '+' + process.env.CLIENT_PORT;

// const AXIOS = axios.create({
//     baseURL: backendUrl,
//     headers: {
//         'Access-Control-Allow-Origin': frontendUrl
//     }
// });

BeforeAll(async function () {

    try {
        var res = await AXIOS.delete('/drinks/')
        var res = await AXIOS.delete('/drinks/ingredients')
        var res = await AXIOS.delete('/drinks/recipes')
        var res = await AXIOS.delete('/users/')
    } catch (err) {
        ("BeforeAll error: ", err.message)
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
