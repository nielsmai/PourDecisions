import React from 'react';
import { Navigate } from 'react-router-dom';
import './home.css'
// import "@fontsource/montserrat"

import logo from '../../images/logoCrop.png'


export default function Home() {

    if(window.localStorage.length == 0) return <Navigate to="/setup" replace={true}/>
    
    return (
        <div className="Home" class="center text">
            <img src={logo} alt="Logo" class="resizeLogo"></img>
        <br/>
            <span>Have a bunch of ingredients, but no idea what drinks to make with them?</span>
        <br/>
            <span>Don't worry and let us make your pour decisions.</span>
        <br/>
            <span>Click on mix to begin!</span>
            <br></br>
            {/* <button type="button" class="mix">Mix!</button> */}
            <div className="b">
            <ul>
            <li>
            Mix!
            <span></span><span></span><span></span><span></span>
            </li>
            </ul>
            </div>
        </div>
    );
}

