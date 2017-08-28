import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from 'store'

class App extends React.Component {
    render() {
        return(
        <Provider store={store}>

        </Provider>
        )
    }
}



ReactDOM.render(
    <App/>,
    document.getElementById('root')
);