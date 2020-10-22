import React, {Component} from 'react';
import NotefulContext from './NotefulContext';



class NoteSidebar extends Component {
    
    
    render(){
        //const noteId = props.match.params.noteId;
        //const findFolder = (notes, noteId) => {
          //  const note = notes.find(note => note.id === noteId)
            //console.log(note)
            //return (note.folderId)
       // }
            
        
    return(
        <NotefulContext.Consumer>
            {(value) => {
               // const folder = findFolder(value.notes, noteId)
                return(
                    <div>
                        <button className='backButton' onClick={this.props.history.goBack}>Go Back</button>
                        <div>
                           {//} <h3>{folder.name}</h3>
                            }       
                        </div>
                    </div>
                )
            }}
        </NotefulContext.Consumer>
        
    )
    }
}

export default NoteSidebar;