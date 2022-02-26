import './createAccount.css'
import '../changePasswordAccount/martini.png'
import '../changePasswordAccount/arrow.png'
export default function ChangePasswordAccount() {

    return (
        <>
            <body>
                <h1>Enter the following information below</h1>
                
                <div>

                <img src={require('../changePasswordAccount/martini.png')} id="martini" alt="Martini Glass Logo" title="Martini Glass"width="400px"></img>

                <table>
                    <tr>
                        <th>
                            <p ><b>Username</b></p>
                        </th>
                        <td >
                            <form>
                                <input v-model="username" placeholder="Username"></input>
                            </form>
                        </td>
                    </tr>

                    <tr>
                        <th>
                            <p ><b>Password</b></p>
                        </th>
                        <td >
                            <form>
                                <input v-model="password" placeholder="Password"></input>
                            </form>
                        </td>
                    </tr>

                    <tr>
                        <th>
                            <p ><b>Email</b></p>
                        </th>
                        <td >
                            <form>
                                <input v-model="email" placeholder="Email"></input>
                            </form>
                        </td>
                    </tr>
                </table>
                </div>

                <div >
                    <a class = "button" href="http://localhost:3000">Create Account</a>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div>
                    <a href="http://localhost:3000">
                    <img src={require('../changePasswordAccount/arrow.png')} id="back" alt="Left arrow" title="Back"width="50px"></img>
                    </a>
                </div>
            </body>
        </>
    );
}