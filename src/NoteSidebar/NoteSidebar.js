import React, {Component} from 'react';
import NotefulContext from '../NotefulContext';
import {Link} from 'react-router-dom';



class NoteSidebar extends Component {
    static defaultProps = {
        match: {
            params: {
                noteId: ''
            }
        },
        history: {
            goBack: () => {}
        }

    }

    render(){
        const noteId = encodeURI(this.props.match.params.noteId);
        const findFolder = (notes, noteId, folders) => {
           const note = notes.find(note => note.id === noteId)
           if (note){
            const folder = folders.find(folder => folder.id === note.folderId)
           return folder
           }
           return {
               name: '',
               id: ''
           }
        }
            
        
    return(
        <NotefulContext.Consumer>
            {(value) => {
                const notes = value.notes;
               const folder = findFolder(notes, noteId, value.folders)
                return(
                    <div>
                        <button className='backButton' onClick={this.props.history.goBack}>Go Back</button>
                        <div>
                             <Link to={`/folder/${folder.id}`}><h3>{folder.name}</h3></Link>   
                        </div>
                    </div>
                )
            }}
        </NotefulContext.Consumer>
        
    )
    }
}

export default NoteSidebar;