import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
// import axios from "axios"
import AXIOS from "../../axios.config"
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import "./logInAccount.css"

export default function LogInAccount() {
    const [token, setToken] = useState();
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    //React States
    const [errorMessages, setErrorMessages] = useState({}); //Store error msg + field name
    const [isSubmitted, setIsSubmitted] = useState(false); //bool to indicate successfull submission

    //Handle User Login
    const errors = {
        name: "Invalid username",
        pass: "Invalid password"
    };
    
    // Avoids double login
    useEffect(() => {
        // setting loggedIn to false does not work because weird behaviours
        if (localStorage.getItem('loggedIn') !== null){
            window.location.href = 
            (process.env.REACT_APP_CLIENT_HOST ?
                process.env.REACT_APP_CLIENT_HOST + ":" + process.env.REACT_APP_CLIENT_PORT 
                : "http://localhost:3000")
        }
    }, [])
    //Handle form submission
    const handleSubmit = (event) => {
        //Prevent the page form reloading
        event.preventDefault();
        //Check login
        const PostData = async () => {
            let res = await AXIOS.post('/users/login', {
                username: loginUsername,
                password: loginPassword
            })
            .then(response => {
                window.localStorage.setItem('loggedIn', true)
                setIsSubmitted(true);
                window.localStorage.setItem('loggedUsername', loginUsername)
            })
            .catch(e => {
                console.log(e)
            })
        }
        PostData()
    }

    //Code for error message
    const renderErrorMessage = (name) =>
        name == errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    //Code for Login Form
    const renderForm = (
        <div className="login">
            <form onSubmit={handleSubmit}>
            <div>
            <div className="boxLogInAccount">
            <div className="row">
            <div className="columnLeft div">
                <img src={logo} alt="Logo" class="resize"></img>
            </div>
            <div className="columnRight">
                <div>
                    <h1 className="loginTitle">Login</h1>
                    <div>
                            <div>
                             <h4 className="username">Username</h4>
                            </div>
                            <input type="text" name="name" required
                                placeholder="username"
                                onChange={ (e) => setLoginUsername(e.target.value)}
                            />
                            {renderErrorMessage("name")}
                    </div>
                    <div className="formBottom">
                        <div>
                            <h4 className="password">Password</h4>
                        </div>
                        <input type="text" name="pass" required
                            placeholder="password"
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />
                        {renderErrorMessage("pass")}
                    </div>

                    <div className="loginButton">
                        <button type="submit" className="loginConfirm">Login</button>
                    </div>

                    <div className="forgetAccount">
                        <label><b>Don't have an account?</b></label>
                    </div>

                    <div className="signUp">
                        <Link to="/account/register">Sign up</Link>
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
            {isSubmitted ? 
                window.location.href = 
                (process.env.REACT_APP_CLIENT_HOST ?
                    process.env.REACT_APP_CLIENT_HOST + ":" + process.env.REACT_APP_CLIENT_PORT 
                    : "http://localhost:3000")
                : renderForm
            }
            </div>
        </div>
    
    // <div>
    //     <h1>TEST</h1>
    // </div>
    );






}
