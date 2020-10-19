import React from 'react';
import Note from './Note';

function MainMain(props) {
    return(
        <div>
            <Note list={props.notes}/>
        </div>
    )
}

export default MainMain;