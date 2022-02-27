import React, {useState} from 'react';

export default function createDrink() {

    // const [name, setDrink] = useState("");
    // const [pub, setPublic] = useState(false);
    // const [rating, setRating] = useState(0);

    return (
        <>
        <h2>Create Drink</h2>
        <h3>Step 1.</h3>
        <h3>Add the ingredients that are in your drink</h3>
        <form>

            <input type="text"
                name="ingredient"
                placeholder='ingredient'></input>
            <select name="ingredientType">
            <option value="none">Nothing</option>
            <option value ="guava">Guava</option>
            <option value ="lychee">Lychee</option>
            <option value ="papaya">Papaya</option>
            </select>
            <br></br><br></br>
            <input type="submit" value="Submit"></input>
        </form>

        <h3>Step 2.</h3>
        <h3>Write the recipe, and make sure to include tags!</h3>

        <form>
        <input type="text"
                name="drinkName"
                placeholder="Drink Name">
                </input>
            <br></br>
            <input type="garnish"
                name="garnish"
                placeholder="Garnish"></input>
                <br></br>
            <input type="instructions"
                name="instructionList"
                placeholder='Instructions'></input>
                <br></br>
            <input type="checkbox" 
                name="pub"
                >
                </input>
            
            <label for="public">Public</label>
            <br></br>
            <label value="tagsLabel">Tags</label>
            <select name="tags">
            <option value="none">Nothing</option>
            <option value ="guava">Guava</option>
            <option value ="lychee">Lychee</option>
            <option value ="papaya">Papaya</option>
            </select>
            <br></br><br></br>

            <input type="submit" value="Submit"></input>
        </form>
        </>
    )
}