import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch'; // fetch polyfill for IE
import App from './app';

ReactDOM.render(<App/>, document.getElementById('root'));