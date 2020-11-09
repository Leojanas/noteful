import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

class Folder extends React.Component{
    static defaultProps = {
        folder: {
            name: '',
            id: ''
        }
    }

    render(){
        return(
            <NavLink to={`/folder/${this.props.folder.id}`} activeClassName='active'>
                <h2>{this.props.folder.name}</h2>          
            </NavLink>
        ) 
    }  
}

Folder.propTypes = {
    folder: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })
}

export default Folder;