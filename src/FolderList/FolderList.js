import React from 'react';
import Folder from '../Folder/Folder';
import NotefulContext from '../NotefulContext';
import {Link} from 'react-router-dom';

function FolderList() {
    return(
        <NotefulContext.Consumer>
            {(value) => {
                return (
                    <>
                    {value.folders.map(folder => {
                        return(
                            <Folder key={folder.id} folder={folder} />
                        )
                    })}
                    <Link to='/addFolder'>Add Folder</Link>
                    </>
                )  
            }}
        </NotefulContext.Consumer>
    )
}

export default FolderList;