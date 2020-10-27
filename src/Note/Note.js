import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';

class Note extends Component {
    static defaultProps ={
        updateState: () => {},
        onDeleteNote: () => {},
        note: {
            id: '',
            name: '',
            modified: '',
            content: '',
            folderId: ''
        }
      }
    static contextType=NotefulContext;
    
    handleDeleteNote = () => {
        const noteId = this.props.note.id;
        fetch(`http://localhost:9090/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => {
            if(!response.ok){
                return(response.json().then(e => Promise.reject(e))
                )}
            return response.json()
        })
        .then(() => {
            this.context.deleteNote(this.props.note.id);
            this.props.onDeleteNote();
        })
        }
    
    render(){
        const modified = new Date(this.props.note.modified);
    return(
        <div className='note'>
            <Link to={`/note/${this.props.note.id}`}>
                <h3>{this.props.note.name}</h3>
            </Link>
            <p>Modified on: {modified.toString()}</p>
            <NotefulContext.Consumer>
                {(value) => {
                    return <button onClick={this.handleDeleteNote}>Delete Note</button>
                }}
            </NotefulContext.Consumer>
        </div>
  
    )
 }
}

Note.propTypes = {
    note: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        folderId: PropTypes.string.isRequired,
        content: PropTypes.string,
        modified: PropTypes.string
    })
}

export default Note;