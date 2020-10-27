import React from 'react';
import ReactDOM from 'react-dom';
import NoteSidebar from './NoteSidebar';
import {BrowserRouter} from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><NoteSidebar /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});