import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './general/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { Provider } from 'react-redux';
import 'tachyons';
import {BrowserRouter} from 'react-router-dom'

// Providing store to everybody with provider
ReactDOM.render( <Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));
registerServiceWorker();
