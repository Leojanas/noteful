import React from 'react';
import {Link} from 'react-router-dom';

function Note(props) {
    const notes = props.list.map((note, i) => {
        return(
            <div key={i} className='note'>
                <Link to={`/note/${note.id}`}><h3>{note.name}</h3></Link>
                <p>Modified on: {note.modified}</p>
            </div>
        )
    })
    return(
        notes      
    )
}

export default Note;