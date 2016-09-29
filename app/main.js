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
import App from './app'
import {DatePicker} from 'antd'
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
var store=configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route path="/Test" component={DatePicker}/>
            </Route>
        </Router>
    </Provider>,document.getElementById('app'));
// Hot Module Replacement API
// if (module.hot) {
//     module.hot.accept('./app', () => {
//         const Sider = require('./app').default;
//         ReactDOM.render(
//             <AppContainer>
//                 <App/>
//             </AppContainer>
//             ,
//             document.getElementById('app')
//         );
//     });
// }