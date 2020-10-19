import React from 'react';
import Folder from './Folder';

function FolderSidebar(props) {
    return(
        <div>
            <Folder list={props.folders} folderId={props.folderId}/>
        </div>
    )
}

export default FolderSidebar;