import React from 'react';


const NotefulContext = React.createContext({
    folderId: '',
    folderObject: {},
    noteId: '',
    noteobject: {
        id: '',
        name: '',
        modified: '',
        folderId: '',
        content: ''
    },
    setNote: () => {

    },
    setFolder: () => {

    }
})

export default NotefulContext;