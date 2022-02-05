const router = require('express').Router();
let Drink = require('../models/drink.model');

// this is supposed to get info once we go to root
router.route('/').get((req, res) => {
    Drink.find()
    .then(drinks => res.json(drinks))
    .catch(err => res.status(400).json('Error: ' + err));
});

// route to add new drinks (post)
// need to review
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const recipe = req.body.recipe;
    const rating = Number( req.body.rating );
    const date = Date.parse( req.body.date );

    // create new user with info
    const newDrink = new Drink({
        name,
        recipe,
        rating,
        date
    });

    // save them to database
    newDrink.save()
    .then(() => res.json('Drink added.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
