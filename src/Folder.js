import React from 'react';
import {Link} from 'react-router-dom';

function Folder(props) {
    const folders = props.list.map((folder, i) => {
        if(props.folderId === folder.id){
            return(
                <div key={i} className='folder highlight'>
                    <Link to={`/folder/${folder.id}`} ><h3>{folder.name}</h3></Link>
                </div>
            ) 
        }else{
        return(
            <div key={i} className='folder'>
                <Link to={`/folder/${folder.id}`} ><h3>{folder.name}</h3></Link>
            </div>
        )}
    })
    return(
        folders      
    )
}

export default Folder;