/**
 * Created by yunlong on 16/9/28.
 */
/**
 * Created by yunlong on 16/9/27.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/Test'
import { AppContainer } from 'react-hot-loader';
ReactDOM.render(<AppContainer>
<Test/>
</AppContainer>,document.getElementById('test'));
// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/Test', () => {
        const Test = require('./components/Test').default;
        ReactDOM.render(
        <AppContainer>
        <Test/>
        </AppContainer>
            ,
            document.getElementById('test')
        );
    });
}