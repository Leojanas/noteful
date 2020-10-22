import React from 'react';
import Folder from './Folder';
import NotefulContext from './NotefulContext';

function FolderList(props) {
    return(
        <NotefulContext.Consumer>
            {(value) => {
                return (value.folders.map(folder => {
                    return(
                        <>
                            <Folder key={folder.id} folder={folder} />
                        </>
                    )
                }))  
            }}
        </NotefulContext.Consumer>
    )
}

export default FolderList;