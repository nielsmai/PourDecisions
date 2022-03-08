import './viewAccount.css'
//import './martini.png'
import './arrow.png'
import React, { useState, useEffect } from 'react';

export default function ViewAccount() {

    const [userUsername, setUserUsername] = useState(window.localStorage.getItem('loggedUsername'));

    return (
        <>
            <body>
                <h1>Account information</h1>
                
                <div>

                <img src={require('./martini.png')} id="martini" alt="Martini Glass Logo" title="Martini Glass"width="400px"></img>

                <table>
                    <tr>
                        <th>
                            <p ><b>Username</b></p>
                        </th>
                        <td >
                            <p class="dark" ><b>{window.localStorage.getItem('loggedUsername')}</b></p>
                        </td>
                    </tr>

                    <tr>
                        <th>
                            <p ><b>Password</b></p>
                        </th>
                        <td >
                            <p class="dark" ><b>user1password2</b></p>
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

                <div >
                    <a class = "button" href="http://localhost:3000">Edit</a>
                    {/* <button onClick={printmessage}>Password changed!</button>
                    <p v-if={PasswordChanged} class="dark" ><b>Password Changed Successfully!</b></p> */}
                    
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div>
                    <a href="http://localhost:3000">
                    <img src={require('./arrow.png')} id="back" alt="Left arrow" title="Back"width="50px"></img>
                    </a>
                </div>
            </body>
        </>
    );
}