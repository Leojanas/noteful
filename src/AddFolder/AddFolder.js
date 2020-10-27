import React, {Component} from 'react';
import NotefulContext from '../NotefulContext';

export default class AddFolder extends Component {
    static contextType= NotefulContext;
    handleAddFolder = (e) => {
        e.preventDefault();
        const folder = {
            id: encodeURI(e.target.name.value),
            name: e.target.name.value,
        }
        fetch(`http://localhost:9090/folders`, {
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
            //this.props.history.push('/')

        })
    }
    render(){
        return(
            <form onSubmit={(e) => this.handleAddFolder(e)}>
               <h2>Add Folder:</h2>
               <label htmlFor="name">Folder Name: </label>
               <input id="name" name="name" />
               <button type="submit">Add</button> 
            </form>
        )
    }

}