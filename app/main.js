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
import {Provider} from 'react-redux'
import {Router, Route, hashHistory} from 'react-router'
import App from './containers/app'
import BasicCommunitiesContainer from './containers/BasicCommunitiesContainer'
import BasicCommunitiesInfo from './components/BasicCommunitiesInfo';
import StatAdsContainer from './containers/StatAdsContainer';
import configureStore from './store/configureStore';
import {AppContainer} from 'react-hot-loader';
var store = configureStore();
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <Router history={hashHistory}>
                    <Route path="/" breadcrumbName="基础数据" component={App}>
                        <Route path="/basic/communities" breadcrumbName="社区列表" component={BasicCommunitiesContainer}>
                        </Route>
                        <Route path="/basic/communities/info/:id" breadcrumbName="社区信息"
                               component={BasicCommunitiesInfo}/>
                        <Route path="/stat/ads" breadcrumbName="社区列表" component={StatAdsContainer}></Route>
                    </Route>




                </Router>
            </AppContainer>
        </Provider>, document.getElementById('app'));
    if (module.hot) {
        module.hot.accept('./containers/app', () => {
            const App = require('./containers/app').default;
            ReactDOM.render(
                <Provider store={store}>
                    <AppContainer>
                        <Router history={hashHistory}>
                            <Route path="/" breadcrumbName="基础数据" component={App}>
                                <Route path="/basic/communities" breadcrumbName="社区列表" component={BasicCommunitiesContainer}>

                                </Route>
                                <Route path="/basic/communities/info/:id" breadcrumbName="社区信息"
                                       component={BasicCommunitiesInfo}/>
                            </Route>
                            <Route path="/" breadcrumbName="基础数据" component={App}>
                                <Route path="/stat/ads" breadcrumbName="社区列表" component={StatAdsContainer}>

                                </Route>

                            </Route>
                        </Router>
                    </AppContainer>
                </Provider>, document.getElementById('app'));
        });
    }
