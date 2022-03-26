import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import './home.css'
// import "@fontsource/montserrat"
import AXIOS from "../../axios.config"
import logo from '../../images/logoCrop.png'

export default function Home() {

    // const [hasUsers] = useState(false)

    // useEffect(() => {
    //     AXIOS.get('/users/').then(res => {
    //         hasUsers(res.data.length > 0)
    //     })
    // }, [hasUsers])

    // if(!hasUsers) return <Navigate to="/setup" replace={true}/>
    
    return (
        <div className="Home" class="center text">
            <img src={logo} alt="Logo" class="resizeLogo"></img>
            <body>Have a bunch of ingredients, but no idea what drinks to make with them?</body>
            <body>Don't worry and let us make your pour decisions.</body>
            <body>Click on mix to begin!</body>
            <br></br>
            {/* <button type="button" class="mix">Mix!</button> */}
            <div class="b">
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

