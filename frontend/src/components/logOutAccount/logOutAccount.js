import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
// import axios from "axios"
import AXIOS from "../../axios.config"
import logo from '../../images/logo.png'
import "./logOutAccount.css"


// // Connect to MongoDB
// var CONNECTION_URL;
// if (process.env.NODE_ENV === "production"){
//     CONNECTION_URL = process.env.ATLAS_URI;
// }else{
//     CONNECTION_URL = "http://localhost:5000/";
// }
// var AXIOS = axios.create({
//     baseURL: CONNECTION_URL
// })



export default function LogOutAccount() {
    //Handle form submission
    const handleSubmit = (event) => {
        //Prevent the page form reloading
        event.preventDefault();
        //Check login
        try{
            AXIOS.get('/users/logout')
            window.localStorage.setItem('loggedIn', false)
            window.localStorage.removeItem('loggedUsername')
            console.log("Successful logout")
            setIsSubmitted(true);
        }
        catch(e){
            console.log(e)
        }
    }
    //React States
    const [errorMessages, setErrorMessages] = useState({}); //Store error msg + field name
    const [isSubmitted, setIsSubmitted] = useState(false); //bool to indicate successfull submission

    //Code for error message
    const renderErrorMessage = (name) =>
        name == errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    //Code for Login Form
    const renderForm = (
        <div className="logout">
            <form onSubmit={handleSubmit}>
            <div>
            <div className="boxLogInAccount">
            <div className="row">
            <div className="columnLeft">
                <img src={logo} alt="Logo" class="resize"></img>
            </div>
            <div className="columnRight">
                <div>
                    <h1 className="loginTitle libre">Logout</h1>

                    <div className="loginButton">
                        <button type="submit" className="loginConfirm montserrat">Logout</button>
                    </div>
                </div>

            </div>
        </div>
        </div>
        </div>
        </form>
        </div>
    );

    return (
        <div className="app">
      <div className="login-form">
        {isSubmitted ? window.location.href = process.env.REACT_APP_CLIENT_HOST + ":" + process.env.REACT_APP_CLIENT_PORT || "http://localhost:3000" : renderForm}
      </div>
    </div>
    // <div>
    //     <h1>TEST</h1>
    // </div>
    );






}
