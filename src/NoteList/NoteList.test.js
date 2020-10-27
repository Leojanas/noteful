import React from 'react';
import ReactDOM from 'react-dom';
import NoteList from './NoteList';
import {BrowserRouter} from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><NoteList /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});