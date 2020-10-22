import React from 'react';
import {NavLink} from 'react-router-dom';

function Folder(props) {
    return(
        <NavLink to={`/folder/${props.folder.id}`} activeClassName='active'>
            <h3>{props.folder.name}</h3>          
        </NavLink>
    ) 
}

export default Folder;