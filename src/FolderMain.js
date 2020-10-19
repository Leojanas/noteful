import React from 'react';
import Note from './Note';

function FolderMain(props) {
const list = props.notes.filter(function(note) {
    return (note.folderId === props.folderId)
})
    return(
        <div>
            <Note list={list} />
        </div>
    )
}

export default FolderMain;