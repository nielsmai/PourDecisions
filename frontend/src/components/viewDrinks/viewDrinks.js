import React, { useState } from 'react';

function viewDrinks() {

    return (

    <div>
        <div class="viewDrinksContainer">
            <div class="rowViewDrinks">
                <div class="columnLeftViewDrinks">
                    <div class="pageTitle">
                        <h1>Easy Whiskey Sour</h1>
                    </div>
                </div>
                <div class="columnRightViewDrinks">
                    <div class="likeCount">
                        <h1>58 Likes</h1>
                    </div>
                </div>
            </div>

            <div class="drinksTag">
                <h3 class="alcoholicTag">Alcoholic</h3>
            </div>

            <div class="ingredientsList">
                <h2>Ingredients:</h2>
                <p class="ingredients">
                    2 ounces (4 tablespoons) bourbon whiskey*
                    <br />1 ounce (2 tablespoons) fresh lemon juice
                    <br />3/4 ounce (1 1/2 tablespoons) pure maple syrup (or simple syrup)
                </p>
            </div>
            
            <div class="garnishList">
                <h2>Garnish:</h2>
                <p class="garnish">
                    Orange peel and a cocktail cherry
                    <br />Ice, for serving
                </p>
            </div>

            <div class="instructionsList">
                <h2>Instructions:</h2>
                <p>
                    Add the bourbon whiskey, lemon juice, and syrup to a cocktail
                    <br />shaker. Fill with a handful of ice and shake until very cold.
                    <br />Strain the drink into a lowball or Old Fashioned glass. Serve with
                    <br />ice, an orange peel, and a cocktail cherry.
                </p>
            </div>
        </div>

        <div class="addToFavouritesButton">
            <button type="button" class="addToFavouritesConfirm">Add To Favourites!</button>
        </div>

    </div>
    );

} export default viewDrinks