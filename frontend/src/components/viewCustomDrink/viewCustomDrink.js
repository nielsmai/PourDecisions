import React, { useState } from 'react';
//import './viewCustomDrink.css'

export default function ViewCustomDrink() {

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
                                <input type="checkbox" id="visibility" name="visbility" value="public"></input>
                                <label for="visibility">Public</label>
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