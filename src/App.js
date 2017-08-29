import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import {StudentTable, Adder} from './Panel';
import {Menu} from './Menu';
import {Provider} from 'react-redux';
import {store} from './Store';

const App = ({children}) => {
    return (
        <div>
            <Menu/>
            <div>{children}</div>
        </div>
    );
};


export default class extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path="/" component={App}>
                        <Route path="add" component={Adder}/>
                        <Route path="show" component={StudentTable}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}
