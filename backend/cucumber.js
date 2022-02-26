// require('dotenv').config()


// const worldParameters = {
//     backendUrl : process.env.DEV_API_HOST + ':' + process.env.DEV_API_PORT || process.env.API_HOST + ':' + process.env.API_PORT,
//     frontendUrl : process.env.DEV_CLIENT_HOST + ':' + process.env.DEV_CLIENT_PORT || process.env.CLIENT_HOST + ':' + process.env.CLIENT_PORT
// }

// const common = `--world-parameters '${JSON.stringify(worldParameters)}'`
const common = ``
// console.log(common)

module.exports = {
    'default': `${common} --publish-quiet`,
    'ci': `${common} --format html:./cucumber-report.html --publish`
}

