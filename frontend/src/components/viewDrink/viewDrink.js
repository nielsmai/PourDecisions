import React, { useEffect, useState } from 'react';
import './viewDrink.css'
import AXIOS from '../../axios.config'
import { Link, useParams } from 'react-router-dom';

export default function ViewDrink() {
    let { name } = useParams();
    
    return (
        <>
            <h1>{ name }</h1>
        </>
    )
} 
