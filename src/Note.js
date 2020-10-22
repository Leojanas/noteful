import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NotefulContext from './NotefulContext';

class Note extends Component {
    static defaultProps ={
        updateState: () => {},
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
        
    return(
        <div className='note'>
            <Link to={`/note/${this.props.note.id}`}>
                <h3>{this.props.note.name}</h3>
            </Link>
            <p>Modified on: {this.props.note.modified}</p>
            <NotefulContext.Consumer>
                {(value) => {
                    return <button onClick={this.handleDeleteNote}>Delete Note</button>
                }}
            </NotefulContext.Consumer>
        </div>
  
    )
 }
}

export default Note;