import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app';
import 'bootstrap/dist/css/bootstrap.css';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
