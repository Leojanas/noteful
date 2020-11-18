import React, {Component} from 'react';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';

export default class AddNote extends Component {
    static contextType= NotefulContext;
    handleAddNote = (e) => {
        e.preventDefault();
        const modified = new Date();
        const folder = this.context.folders.find(folder => {
            return folder.folder_name === e.target.folder.value
        })
        const note = {
            note_name: e.target.name.value,
            modified: modified,
            folder_id: folder.id,
            content: e.target.content.value, 
        }
        fetch(`http://localhost:8000/api/notes`, {
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
            this.props.history.push(`/folder/${note.folderId}`)

        })
        .catch(e => {
            return window.alert('There was an error adding the note.')
        })
    }
    render(){
        return(
            <form onSubmit={(e) => this.handleAddNote(e)}>
                <h2>Add Note:</h2>
                <label htmlFor="name">Note Name: </label>
                <input required id="name" name="name" />
                <label htmlFor="folder">Add to folder:</label>
                <select required name="folder" id="folder">
                    {this.context.folders.map(folder => {
                        return (
                            <option name={folder.folder_name} id={folder.folder_name} key={folder.id}>{folder.folder_name}</option>
                        )
                    })}
                </select>
                <br />
                <label htmlFor="content">Note Content:</label>
                <textarea required id="content" name="content" />
                <button type="submit">Add</button> 
            </form>
        )
    }

}

AddNote.propTypes={
    history: PropTypes.object.isRequired
}
