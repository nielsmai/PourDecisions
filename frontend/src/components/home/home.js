import React from 'react';
import './home.css'
// import "@fontsource/montserrat"

import logo from '../../images/logo.png'

export default function Home() {
    return (
        <div className="Home" class="center text">
            <img src={logo} alt="Logo"></img>
            <body>Have a bunch of ingredients, but no idea what drinks to make with them?</body>
            <body>Don't worry and let us make your pour decisions.</body>
            <body>Click on mix to begin!</body>
            <br></br>
            <button type="button" class="mix">Mix!</button>
        </div>
    );
}

