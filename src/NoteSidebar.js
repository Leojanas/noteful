import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';



class NoteSidebar extends Component {

    render(){
    
    return(
        <div>
             <button className='backButton' onClick={this.props.history.goBack}>Go Back</button>
            <div>
                <h3>{this.folderName}</h3>
            </div>
        </div>
    )
    }
}

export default withRouter(NoteSidebar);