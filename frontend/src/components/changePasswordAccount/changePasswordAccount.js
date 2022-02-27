import './changePasswordAccount.css'
import './martini.png'
import './arrow.png'
export default function ChangePasswordAccount() {

    // function reloadPage() {

    //     const refreshPage = ()=>{
    //        window.location.reload();
    //     }
      
    //     return (
    //       <div>
    //         <h1>{Math.random()}</h1>
    //         <button onClick={refreshPage}>Refresh</button>
    //       </div>
    //     );
    //   }

    // PasswordChanged : false

    // const printmessage = ()=>{
    //     window.localStorage.setItem('passwordChangeSuccess', true);
    //     PasswordChanged : true
    // };

    return (
        <>
            <body>
                <h1>Enter the following information below</h1>
                
                <div>

                <img src={require('./martini.png')} id="martini" alt="Martini Glass Logo" title="Martini Glass"width="400px"></img>

                <table>
                    <tr>
                        <th>
                            <p ><b>Username</b></p>
                        </th>
                        <td >
                            <p class="dark" ><b>admin1</b></p>
                        </td>
                    </tr>

                    <tr>
                        <th>
                            <p ><b>Password</b></p>
                        </th>
                        <td >
                            <form>
                                <input v-model="oldPass" placeholder="Old Password"></input>
                                <input v-model="newPass" placeholder="New Password"></input>
                                <input v-model="confirmPass" placeholder="Confirm New Password"></input>
                            </form>
                        </td>
                    </tr>

                    <tr>
                        <th>
                            <p ><b>Email</b></p>
                        </th>
                        <td >
                            <p class="dark" ><b>admin1@gmail.com</b></p>
                        </td>
                    </tr>
                </table>
                </div>

                <div >
                    <a class = "button" href="http://localhost:3000">Apply Changes</a>
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