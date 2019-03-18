import React from 'react';
import ReactDOM from 'react-dom';
import '@styles/reset.css';
import * as serviceWorker from './serviceWorker';
import App from './views/App';

let FastClick = require('fastclick');

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}

ReactDOM.render(
    <App/>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
