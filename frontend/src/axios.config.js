import axios from 'axios'

if (process.env.NODE_ENV == "production"){
    var backendUrl = process.env.REACT_APP_API_HOST + ":" + process.env.REACT_APP_API_PORT
    var frontendUrl = process.env.REACT_APP_CLIENT_HOST + ":" + process.env.REACT_APP_CLIENT_PORT
} else {
    var backendUrl = "http://localhost:5000"
    var frontendUrl = "http://localhost:3000"
}
const AXIOS = axios.create({
    baseURL: backendUrl,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': frontendUrl
    }
});

export default AXIOS
