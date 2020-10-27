import React from 'react';
import ReactDOM from 'react-dom';
import NoteMain from './NoteMain';
import {BrowserRouter} from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><NoteMain /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});