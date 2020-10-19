import React from 'react';
import Note from './Note';

function NoteMain(props) {
    const list = props.notes.filter(function(note) {
        return (note.id === props.noteId)
    })
    return(
       <div>
           <Note list={list} />
            <div>
            <p>{list[0].content}</p>
            </div>
       </div>
    )
}

export default NoteMain;