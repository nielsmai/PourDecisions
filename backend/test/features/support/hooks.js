const axios = require('axios');
const { BeforeAll, AfterAll } = require('@cucumber/cucumber');

require('dotenv').config({path:__dirname+'/./../../../.env'});

const backendUrl = process.env.DEV_API_HOST + ':' + process.env.DEV_API_PORT || process.env.API_HOST + '+' + process.env.API_PORT;
const frontendUrl = process.env.DEV_CLIENT_HOST + ':' + process.env.DEV_CLIENT_PORT || process.env.CLIENT_HOST + '+' + process.env.CLIENT_PORT;

// console.log(backendUrl)
AfterAll(function (callback) {

    const AXIOS = axios.create({
        baseURL: backendUrl,
        headers: {
            'Access-Control-Allow-Origin': frontendUrl
        }
    });
    AXIOS.delete('/users/')
    .then(() => {
        // console.log("users wiped")
        AXIOS.delete('/drinks/')
        .then(() => {
            // console.log("drinks wiped")
            AXIOS.delete('/drinks/ingredients')
            .then(() => {
                // console.log("ingredients wiped")
                AXIOS.delete('/drinks/recipes')
                .then(() => {
                    // console.log("recipes wiped")
                    callback()
                })
            })

        })
    })
    callback()
})

