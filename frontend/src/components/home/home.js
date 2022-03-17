import React from 'react';
import { Navigate } from 'react-router-dom';

export default function Home() {

    if(window.localStorage.length == 0) return <Navigate to="/setup" replace={true}/>
    
    return (
        <div className="Home">
            <body>Have a bunch of ingredients, but no idea what dirnks to make with them?</body>
            <body>Don't worry and let us make your pour decisions.</body>
            <body>Click on mix to begin!</body>
            <button type="button">Mix!</button>
        </div>
    );
}