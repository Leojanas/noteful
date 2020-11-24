import React, {Component} from 'react';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';

export default class AddFolder extends Component {
    static contextType= NotefulContext;
    handleAddFolder = (e) => {
        e.preventDefault();
        const folder = {
            folder_name: e.target.name.value,
        }
        fetch(`https://calm-dawn-64511.herokuapp.com/api/folders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(folder)
        }).then(response => {
            if(!response.ok){
                return response.json().then(e => Promise.reject(e))
            }
            return response.json()
        }).then(() => {
            this.context.addFolder(folder);
            this.props.history.push('/')

        })
        .catch((e)=>{
            window.alert('There was an error adding the folder.') 
        })
    }
    render(){
        return(
            <form onSubmit={(e) => this.handleAddFolder(e)}>
               <h2>Add Folder:</h2>
               <label htmlFor="name">Folder Name: </label>
               <input required id="name" name="name" />
               <button type="submit">Add</button> 
            </form>
        )
    }

}

AddFolder.propTypes={
    history: PropTypes.object.isRequired
}
