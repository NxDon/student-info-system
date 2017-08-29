import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';


import App from './App.js';
import {store} from './Store';

ReactDOM.render(

        <App/>
   ,
    document.getElementById("root")
)