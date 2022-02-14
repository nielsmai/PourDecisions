import React, { useState } from 'react';

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
                    </tr>
                    </table>
                </td>
                </tr>
            </table>
            </div>
    );
}