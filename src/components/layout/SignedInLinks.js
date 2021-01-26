import React from 'react';
import { NavLink } from 'react-router-dom';


const SignedInLinks = () => {
    return(
        <div className = "right">
            <ul>
                <li><NavLink to = "/">New Project</NavLink></li>
                <li><NavLink to = "/">Sign Out</NavLink></li>
                <li><NavLink to = "/" className = "btn btn-floating pink lighten-1">RM</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedInLinks;