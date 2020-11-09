import React, {Component} from 'react';
import Note from '../Note/Note';
import NotefulContext from '../NotefulContext';
import {Link} from 'react-router-dom';
import NoteError from '../NoteError/NoteError';

class NoteList extends Component {
  static defaultProps = {
    match: {
      params: {
        folderId: ''
      }
    }
  }

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
                        <>
                        {findNotesForFolder(value.notes, folderId).map(note => {
                            if (folderId){
                                if (note.folderId === folderId){
                                    return(
                                        <Note 
                                            key={note.id}
                                            note={note}
                                        />
                                    )
                                }
                            }
                            return(
                                <Note 
                                    key={note.id}
                                    note={note}
                                />
                            )
                        })}
                        <Link to='/addNote'>Add Note</Link>
                        </>
                    )
                }}
            </NotefulContext.Consumer>
        )
    }

}

export default NoteList;