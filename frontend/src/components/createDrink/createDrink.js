import React, { useState } from 'react';

export default function CreateDrink() {

    const [name, setDrink] = useState("");
    const [pub, setPublic] = useState(false);
    const [rating, setRating] = useState(0);

    return (
        <>
        <h2>Create Drink</h2>
        <form>
            <input type="text"
                name="drinkName"
                placeholder="Drink Name"
                onChange={(event) => {setDrink(event.target.value)}}>
                </input>
            <br></br>
            <input type="checkbox" 
                name="pub"
                value={pub}
                onChange={(event) => {setPublic(event.target.checked)}}
                >
                </input>
            <label for="public">Public</label>
            <br>
            </br>
            <input type="submit" value="Submit"></input>
        </form>
        </>
    );

}