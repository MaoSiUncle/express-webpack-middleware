/**
 * Created by yunlong on 16/9/29.
 */
/**
 * Created by yunlong on 16/9/28.
 */
/**
 * Created by yunlong on 16/9/27.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import App from './containers/app'
import HomePage from './containers/HomePage'
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
var store=configureStore();
ReactDOM.render(
    <Provider store={store}>
        <AppContainer>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route path="/Data" component={HomePage}/>
            </Route>
        </Router>
        </AppContainer>
    </Provider>,document.getElementById('app'));

if (module.hot) {
    module.hot.accept('./containers/app', () => {
        const Sider = require('./containers/app').default;
        ReactDOM.render(
            <Provider store={store}>
                <AppContainer>
                    <Router history={hashHistory}>
                        <Route path="/" component={App}>
                            <Route path="/Data" component={HomePage}/>
                        </Route>
                    </Router>
                </AppContainer>
            </Provider>,document.getElementById('app'));
    });
}