const axios = require('axios');
const { BeforeAll, After } = require('@cucumber/cucumber');

require('dotenv').config({path:__dirname+'/./../../../.env'});

const backendUrl = process.env.DEV_API_HOST + ':' + process.env.DEV_API_PORT || process.env.API_HOST + '+' + process.env.API_PORT;
const frontendUrl = process.env.DEV_CLIENT_HOST + ':' + process.env.DEV_CLIENT_PORT || process.env.CLIENT_HOST + '+' + process.env.CLIENT_PORT;

const AXIOS = axios.create({
    baseURL: backendUrl,
    headers: {
        'Access-Control-Allow-Origin': frontendUrl
    }
});

BeforeAll(async function () {

    try {
        var res = await AXIOS.delete('/drinks/')
        console.log("drinks wiped")
        var res = await AXIOS.delete('/drinks/ingredients')
        console.log("ingredients wiped")
        var res = await AXIOS.delete('/drinks/recipes')
        console.log("recipes wiped")
        // var res = await AXIOS.delete('/users/')
        // console.log("users wiped")

    } catch (err) {
        console.log("BeforeAll error: ", err.message)
    }
    // AXIOS.delete('/users/')
    // .then(() => {
    //     // console.log("users wiped")
    //     AXIOS.delete('/drinks/')
    //     .then(() => {
    //         // console.log("drinks wiped")
    //         AXIOS.delete('/drinks/ingredients')
    //         .then(() => {
    //             // console.log("ingredients wiped")
    //             AXIOS.delete('/drinks/recipes')
    //             .then(() => {
    //                 // console.log("recipes wiped")
    //                 callback()
    //             })
    //         })

    //     })
    // })
    // // callback()
})

After(async function () {
    try {
        var res = await AXIOS.delete('/drinks/')
        console.log("drinks wiped")
        var res = await AXIOS.delete('/drinks/ingredients')
        console.log("ingredients wiped")
        var res = await AXIOS.delete('/drinks/recipes')
        console.log("recipes wiped")
        var res = await AXIOS.delete('/users/')
        console.log("users wiped")

    } catch (err) {
        console.log("After error: ", err.message)
    }

})
