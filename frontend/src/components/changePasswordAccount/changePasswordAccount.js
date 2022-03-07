import './changePasswordAccount.css'
import './martini.png'
import './arrow.png'

import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import axios, { Axios } from "axios"


export default function ChangePasswordAccount() {

    const [userOldPass, setUserOldPassword] = useState("");
    const [userNewPass, setUserNewPassword] = useState("");
    const [userConfirmedPassword, setUserConfirmedPassword] = useState("");

    //Handle User password change
    const errors = {
        // name: "Invalid usersame",
        invpass: "Invalid password",
        wrongpass: "Incorrect old password"
    };

    //Handle form submission
    const handleSubmit = (event) => {
        //Prevent the page form reloading
        event.preventDefault();
        //Check password change
        const PostData = async () => {

            let res = await AXIOS.put('users/:username/update', { //CHANGE THE URL HERE FOR THE USERNAME GENRE
                //NEED USERNAME!!!!!!!!!! 
                oldpassword: userOldPass,
                newpassword: userNewPass
                confirmPassword: userConfirmedPassword
            })
            .then(response => {
                setIsSubmitted(true);
            })
            .catch(e => {
                console.log(e)
            })
        }
        PostData()
    }

    //React States
    const [errorMessages, setErrorMessages] = useState({}); //Store error msg + field name
    const [isSubmitted, setIsSubmitted] = useState(false); //bool to indicate successfull submission

    //Code for error message
    const renderErrorMessage = (name) =>
        name == errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    //code for password change form
    const renderForm = (
        <div className="changePass">
            <form onSubmit={handleSubmit}>
                <h1>Enter the following information below</h1>

                <div>
                    <img src={require('./martini.png')} id="martini" alt="Martini Glass Logo" title="Martini Glass"width="400px"></img>
                    <table>
                        <tr>
                            <th>
                                <p ><b>Username</b></p>
                            </th>
                            <td >
                                <p class="dark" ><b>user1</b></p> 
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <p ><b>Password</b></p>
                            </th>
                            <td >
                            
                                {/* <input v-model="oldPass" placeholder="Old Password"></input> */}
                                <input type="text" name="oldpassword" required placeholder="Old Password" onChange={ (e) => setUserOldPassword(e.target.value)}/>
                                {renderErrorMessage("invpass")}

                                {/* <input v-model="newPass" placeholder="New Password"></input> */}
                                <input type="text" name="newpassword" required placeholder="New Password" onChange={ (e) => setUserNewPassword(e.target.value)}/>
                                {renderErrorMessage("wrongpass")}

                                {/* <input v-model="confirmPass" placeholder="Confirm New Password"></input> */}
                                <input type="text" name="confirmpassword" required placeholder="Confirm New Password" onChange={ (e) => setUserConfirmedPassword(e.target.value)}/>
                                {renderErrorMessage("wrongpass")}
                            
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <p ><b>Email</b></p>
                            </th>
                            <td >
                                <p class="dark" ><b>email@gmail.com</b></p>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="UpdateButton">
                    {/* <button type="submit" className="updateConfirm" href="http://localhost:3000">Apply Changes</button> */}
                    <button type="submit" className="updateConfirm">Apply Changes</button>
                </div>

                <br></br>
                <br></br>
                <br></br>
                <div>
                    <a href="http://localhost:3000">
                    <img src={require('./arrow.png')} id="back" alt="Left arrow" title="Back"width="50px"></img>
                    </a>
                </div>
            </form>
        </div>
    )

    return (
        <div className="app">
            <div className="updatepass-form">
                {isSubmitted ? window.location.href = "http://localhost:3000" : renderForm}
            </div>
        </div>
    );
}