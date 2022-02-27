import React, { useState } from 'react';

function getAllDrinks() {

    return (

    <div>
        <div class="searchBar">
            <Form>
            <FormControl
            type="search"
            placeholder="Search"
            aria-label="Search"
            />
            <button type="button">Search</button>
            </Form>
        </div>
        <div class="filters">
            <button type="button" class="filters">Alcoholic</button>
            <button type="button" class="filters">Mocktail</button>
            <button type="button" class="filters">Custom</button>
            <button type="button" class="filters">Newst</button>
            <button type="button" class="filters">Popularity</button>
        </div>

        <div class="filters">
        <Card>
        <Card.Header as="h5">Alcoholic</Card.Header>
        <Card.Body>
            <Card.Title>Easy Whiskey Sour</Card.Title>
            <Card.Text>
            58 Likes
            Ingredients: Bourbon, Lemon juice, Syrup
            </Card.Text>
            <Button variant="primary">View details</Button>
        </Card.Body>
        </Card>
        </div>
    </div>
    );

} export default getAllDrinks