import React, { useState } from 'react';
import './viewCustomDrink.css'

export default function ViewCustomDrink() {

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

