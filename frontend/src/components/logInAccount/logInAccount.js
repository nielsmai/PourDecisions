import React, { useState } from 'react';
import ReactDOM from "react-dom";

export default function LogInAccount() {
    //Handle User Login
    const database = [
        {
            username: "user1",
            password: "pass1"
        }
    ];
    const errors = {
        name: "Invalid username",
        pass: "Invalid password"
    };
    //Handle form submission
    const handleSubmit = (event) => {
        //Prevent the page form reloading
        event.preventDefault();
        
        var {name, pass} = document.forms[0];
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
        <div className="login">
            <form onSubmit={handleSubmit}>
            <div>
            <div class="boxLogInAccount">
            <div class="row">
            <div class="columnLeft">
                <h1>Put Image Here</h1>
            </div>
            <div class="columnRight">
                <div>

                    <h1 class="loginTitle">Login</h1>

                    <div>
                        <form>
                            <div>
                             <h4 class="username">Username</h4>
                            </div>

                            <input type="text" name="name" required/>
                            {renderErrorMessage("name")}
                            
                        </form>
                    </div>

                    <div class="formBottom"><form>
                        <div><h4 class="password">
                            Password
                        </h4>
                        </div>
                        <input type="password" name="pass" required/>
                        {renderErrorMessage("pass")}
                        </form>
                    </div>

                    <div class="loginButton">
                        <button type="submit" class="loginConfirm">Login</button>
                    </div>

                    <div class="forgetAccount">
                        <label>Don't have an account?</label>
                    </div>

                    <div class="signUp">
                        <label>Sign Up</label>
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
    //     <div className="app">
    //   <div className="login-form">
    //     <div className="title">Sign In</div>
    //     {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
    //   </div>
    // </div>
    <div>
        <h1>TEST</h1>
    </div>
    );






}