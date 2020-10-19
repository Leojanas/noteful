import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import MainMain from './MainMain';
import MainSidebar from './MainSidebar';
import FolderMain from './FolderMain';
import FolderSidebar from './FolderSidebar';
import NoteMain from './NoteMain';
import NoteSidebar from './NoteSidebar';
import STORE from './dummy-store';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      store: STORE
    }
  }
  render(){
  return (
    <main className='App'>
      <header>
        <Link to='/'>
        <h1>Noteful</h1>
        </Link>
      </header>
      <div className='container'>
      <section className='sidebar'>
      <Switch>
        <Route
          exact
          path='/'
          render={() =>
            <MainSidebar
            notes={this.state.store.notes}
            folders={this.state.store.folders}
            />
          }
        />
        <Route
          path='/folder/:folderId'
          render={(props) =>
            <FolderSidebar 
            notes={this.state.store.notes}
            folders={this.state.store.folders}
            folderId={props.match.params.folderId}
            />
          }
        />
        <Route
          path='/note/:noteId'
          render={(props) =>
            <NoteSidebar 
            notes={this.state.store.notes}
            folders={this.state.store.folders}
            noteId={props.match.params.noteId}
            />
          }
        />
        </Switch>
      </section>
      <section className='main'>
        <Switch>
        <Route
          exact
          path='/'
          render={() => 
          <MainMain
            notes={this.state.store.notes}
            folders={this.state.store.folders}
          />
          }
        />
        <Route
          path='/folder/:folderId'
          render={(props) => {
            return <FolderMain
              notes={this.state.store.notes}
              folders={this.state.store.folders}
              folderId={props.match.params.folderId}
            />
            }}
        />
        <Route
          path='/note/:noteId'
          render={(props) => 
            <NoteMain
              notes={this.state.store.notes}
              folders={this.state.store.folders}
              noteId={props.match.params.noteId}
            />
            }
        />
        </Switch>
      </section>
      </div>
      
    </main>
  );
}
}

export default App;
