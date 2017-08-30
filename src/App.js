import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {Layout} from 'antd';

import {StudentTable, Adder} from './Panel';
import {Menu} from './Menu';

import {Provider} from 'react-redux';
import {store} from './Store';

const {Header, Content} = Layout;

const App = ({children}) => {
    return (
        <Layout>
            <Header>
                <Menu/>
            </Header>
            <Content>
                <div>{children}</div>
            </Content>
        </Layout>
    );
};


export default class extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Adder}/>
                        <Route path="add" component={Adder}/>
                        <Route path="show" component={StudentTable}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}
