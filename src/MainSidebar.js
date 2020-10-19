import React from 'react';
import Folder from './Folder';

function MainSidebar(props) {
    return(
        <div>
            <Folder list={props.folders} />
        </div>
    )
}

export default MainSidebar;