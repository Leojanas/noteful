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
            note_name: '',
            modified: '',
            content: '',
            folder_id: ''
        }
      }
    static contextType=NotefulContext;
    
    handleDeleteNote = () => {
        const noteId = this.props.note.id;
        fetch(`https://calm-dawn-64511.herokuapp.com/api/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => {
            if(!response.ok){
                return(response.json().then(e => Promise.reject(e))
                )}
                this.context.deleteNote(this.props.note.id);
                this.props.onDeleteNote();
        })
    }
    
    render(){
        const modified = new Date(this.props.note.modified);
    return(
        <div className='note'>
            <Link to={`/note/${this.props.note.id}`}>
                <h3>{this.props.note.note_name}</h3>
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
        id: PropTypes.number.isRequired,
        note_name: PropTypes.string.isRequired,
        folder_id: PropTypes.number.isRequired,
        content: PropTypes.string,
        modified: PropTypes.string
    })
}

export default Note;