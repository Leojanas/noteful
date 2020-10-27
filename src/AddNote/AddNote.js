import React, {Component} from 'react';
import NotefulContext from '../NotefulContext';

export default class AddNote extends Component {
    static contextType= NotefulContext;
    handleAddNote = (e) => {
        e.preventDefault();
        const modified = new Date();
        console.log(modified);
        const folder = this.context.folders.find(folder => {
            return folder.name === e.target.folder.value
        })
        const note = {
            id: encodeURI(e.target.name.value),
            name: e.target.name.value,
            modified: modified,
            folderId: encodeURI(folder.id),
            content: e.target.content.value, 
        }
        console.log(e.target.name.value)
        fetch(`http://localhost:9090/notes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(note)
        
        }).then(response => {
            if(!response.ok){
                return response.json().then(e => Promise.reject(e))
            }
            return response.json()
        }).then(() => {
            this.context.addNote(note);
            this.props.history.push('/')

        })
    }
    render(){
        return(
            <form onSubmit={(e) => this.handleAddNote(e)}>
               <h2>Add Note:</h2>
               <label htmlFor="name">Note Name: </label>
               <input id="name" name="name" />
                <label htmlFor="folder">Add to folder:</label>
                <select name="folder" id="folder">
                    {this.context.folders.map(folder => {
                        return (
                        <option name={folder.name} id={folder.name}>{folder.name}</option>
                        )
                    })}
                </select>
                <br />
                <label htmlFor="content">Note Content:</label>
                <textarea id="content" name="content" />
               <button type="submit">Add</button> 
            </form>
        )
    }

}