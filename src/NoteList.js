import React, {Component} from 'react';
import Note from './Note';
import NotefulContext from './NotefulContext';

class NoteList extends Component {
    render(){
        const findNotesForFolder = (notes, folderId) => (
            (!folderId)
            ? notes
            : notes.filter(note => note.folderId === folderId)
        )
    
        return(
            <NotefulContext.Consumer>
                {(value) => {
                    const folderId = this.props.match.params.folderId;
                    return(
                        findNotesForFolder(value.notes, folderId).map(note => (
                             <Note 
                                key={note.id}
                                note={note}
                              />
                        ))
                    )
    
                }}
            </NotefulContext.Consumer>
        )
    }

}

export default NoteList;