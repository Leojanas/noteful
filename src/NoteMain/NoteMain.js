import React from 'react';
import Note from '../Note/Note';
import NotefulContext from '../NotefulContext';

class NoteMain extends React.Component {
    static defaultProps = {
        match: {
            params: {
                noteId: ''
            }
        }
    }
    onDeleteNote = () => {
        this.props.history.push('/')
    }
    
    render() {
        const findNote = (notes, noteId) => (
            notes.find(note => note.id === noteId)
        );
        const noteId = encodeURI(this.props.match.params.noteId);
        
        return(
           <div>
               <NotefulContext.Consumer>
                   {(value) => {
                       const note = findNote(value.notes, noteId) || {content: ''};
                       return(
                            <div>
                                <Note note={note} onDeleteNote={this.onDeleteNote} />
                                <div>
                                    <p>{note.content}</p>
                                </div>
                           </div>
                       )
                   }}
               </NotefulContext.Consumer> 
           </div>
        )
    }
    
}

export default NoteMain;