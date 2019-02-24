import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import App from './App';
import registerServiceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
