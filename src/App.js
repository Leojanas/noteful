import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import NoteList from './NoteList/NoteList';
import FolderList from './FolderList/FolderList';
import NoteMain from './NoteMain/NoteMain';
import NoteSidebar from './NoteSidebar/NoteSidebar';
import NotefulContext from './NotefulContext';
import './App.css';
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote';
import NoteError from './NoteError/NoteError';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      folders: [],
      notes: []
    }
  }
    
  handleUpdateState(response) {
    const folders = response[0];
    const notes = response[1];
    this.setState({
      folders: folders,
      notes: notes
    })
  }

  componentDidMount(){
    this.getAllNotesAndFolders();
  }
  
  getAllNotesAndFolders() {
    Promise.all([
      fetch('https://calm-dawn-64511.herokuapp.com/api/folders', {
        method: 'GET'
      }),
      fetch('https://calm-dawn-64511.herokuapp.com/api/notes', {
        method: 'GET'
      })
    ])
    .then(responses => {
      return Promise.all(responses.map((response) => response.json()))})
    .then(response => this.handleUpdateState(response))
    .catch(
      e => console.log('There was an error:' + e)
    )
  }

  handleDeleteNote = (noteId) => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId),
    })
  }

  handleAddFolder = (folder) => {
    this.getAllNotesAndFolders();
  }

  handleAddNote = (note) => {
    this.getAllNotesAndFolders();
  }

  render(){
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.handleDeleteNote,
      addFolder: this.handleAddFolder,
      addNote: this.handleAddNote,
    } 
    return (
      <NoteError>
      <main className='App'>
        <NotefulContext.Provider value={contextValue}>
          <header>
            <Link to='/'>
              <h1>Noteful</h1>
            </Link>
          </header>
          <div className='container'>
            <section className='sidebar' key='sidebar'>
              {['/','/folder/:folderId','/addFolder','/addNote'].map(path => (
                <Route 
                  exact
                  key={path}
                  path={path}
                  component={FolderList}
                />
              ))}
              <Route
                key='/note/:noteId'
                path='/note/:noteId'
                component={NoteSidebar}
              />
            </section>
            <section className='main' key='main'>
              {['/', '/folder/:folderId'].map(path => (
                <Route
                  exact 
                  path={path}
                  key={path}
                  component={NoteList}
                />
              ))}
              <Route
                path='/note/:noteId'
                component={NoteMain}
              />
              <Route
                path='/addFolder'
                component={AddFolder}
              />
              <Route 
                path='/addNote'
                component={AddNote}
              />
            </section>
          </div>
        </NotefulContext.Provider>
      </main>     
      </NoteError>
    )
  }
}

export default App;
