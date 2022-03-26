import React, { useState } from 'react';
import AXIOS from "../../axios.config"
//import './viewCustomDrink.css'


// export default function ChangeVsibility(){
//     const [isChecked, setIsChecked] = useState(true);
    
    
//     const handleOnChange = () => {
//         setIsChecked(!isChecked);
//       };

//     return (
//         <div className="App">
//             Select your pizza topping:
//                 <div className="topping">
//                     <input
//                     type="checkbox"
//                     id="topping"
//                     name="topping"
//                     value="Paneer"
//                     checked={isChecked}
//                     onChange={handleOnChange}
//                     />
//                     Paneer
//                 </div>
//             <div className="result">
//                 Above checkbox is {isChecked ? "checked" : "un-checked"}.
//             </div>
//         </div>
//   );
// }



export default function ViewCustomDrink() {
    const [isChecked, setIsChecked] = useState(false);
    const [userUsername, setUserUsername] = useState(window.localStorage.getItem('loggedUsername'));
    const [drinkName, setDrinkName] = useState("");

    const handleOnChange = () => {
        setIsChecked(!isChecked);
        const PostData = async () => {

            let res = await AXIOS.put('/'+userUsername+'/'+drinkName+'/update/status', {
                // username: userUsername,
                // password: userOldPass,
                // newPassword: userNewPass,
                // confirmNewPassword: userConfirmedPassword
            })
            .then(response => {
                // setIsSubmitted(true);
            })
            .catch(e => {
                console.log(e.response.data.message)
            })
        }
        PostData()  
    };
      

    return (
        <div id="drink">
            <table class="drinks">
                <tr class="individual">
                <td>
                    <table>
                    <tr>
                        <td>Name</td>
                        <td>Rating</td>
                        <td>Tag</td>
                    </tr>
                    <tr>
                        <td>Ingredients</td>
                        <td><button class='modify'>Delete</button></td>
                        <td>                        
                            <form align="center">
                                <input type="checkbox" id="visibility" name="visbility" value="public"  checked={isChecked}
                    onChange={handleOnChange}></input>
                                <label for="visibility">Visbility</label>
                                <div className="result">
                                    Above drink is {isChecked ? "private" : "public"}.
                                </div>
                            </form>
                        </td>
                    </tr>
                    </table>
                </td>
                </tr>
            </table>
            </div>
    );
}