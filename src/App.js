import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import NoteList from './NoteList';
import FolderList from './FolderList';
import NoteMain from './NoteMain';
import NoteSidebar from './NoteSidebar';
import NotefulContext from './NotefulContext';
import './App.css';

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
    Promise.all([
      fetch('http://localhost:9090/folders'),
      fetch('http://localhost:9090/notes')
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

  render(){
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.handleDeleteNote,
    } 
    return (
      <main className='App'>
        <NotefulContext.Provider value={contextValue}>
          <header>
            <Link to='/'>
              <h1>Noteful</h1>
            </Link>
          </header>
          <div className='container'>
            <section className='sidebar' key='sidebar'>
              {['/','/folder/:folderId'].map(path => (
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
            </section>
          </div>
        </NotefulContext.Provider>
      </main>
    )
  }
}

export default App;
