import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

function Folder(props) {
    return(
        <NavLink to={`/folder/${props.folder.id}`} activeClassName='active'>
            <h3>{props.folder.name}</h3>          
        </NavLink>
    ) 
}
Folder.propTypes = {
    folder: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })
}

export default Folder;