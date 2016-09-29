/**
 * Created by yunlong on 16/9/29.
 */
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers/SiderReducers';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    createLogger()
)(createStore)

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState)

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/SiderReducers', () => {
            const nextRootReducer = require('../reducers/SiderReducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}