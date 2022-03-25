import React, { useEffect, useState } from 'react';
import './viewCustomDrink.css'
import AXIOS from '../../axios.config'

export default function ViewCustomDrink() {

    const [listOfDrinks, setListOfDrinks] = useState([]);

    const getDrinks = () => {
        const user = localStorage.getItem('loggedUsername')
        AXIOS.get("/drinks/" + user)
        .then( res => {
            setListOfDrinks(res.data)
        })
    } 

    useEffect( () => {
        if (localStorage.getItem('loggedIn') == null){
            window.location.href = 
            (process.env.REACT_APP_CLIENT_HOST ?
                process.env.REACT_APP_CLIENT_HOST + ":" + process.env.REACT_APP_CLIENT_PORT 
                : "http://localhost:3000")
        } 
        getDrinks()

    }, []) 

    return (
        // <div id="drink">
        //     <table class="drinks">
        //         <tr class="individual">
        //         <td>
        //             <table>
        //             <tr>
        //                 <td>Name</td>
        //                 <td>Rating</td>
        //                 <td>Tag</td>
        //             </tr>
        //             <tr>
        //                 <td>Ingredients</td>
        //                 <td><button class='modify'>Delete</button></td>
        //                 <td>                        
        //                     <form align="center">
        //                         <input type="checkbox" id="visibility" name="visbility" value="public"></input>
        //                         <label for="visibility">Public</label>
        //                     </form>
        //                 </td>
        //             </tr>
        //             </table>
        //         </td>
        //         </tr>
        //     </table>
        //     </div>
        <div id="myDrinks" style={{border: "1px solid black"}}>
        <ul id="drinkList" style={{border: "1px solid black"}}>
        <li>
        
        <table className="drinkInfo">
       
        <tr>
        <td className="name">Some actual normal drink
        </td>
        <td className="rating">Rating</td>
        <td className="tag">Custom/Alcoholic/Classic</td>
        </tr>

        <tr> 
        <td className="ingredients" colSpan={3}>
        Ingredients:  
        </td> 
        </tr>
        
        </table>
        
        </li>
        </ul>
        </div>
    );
}

