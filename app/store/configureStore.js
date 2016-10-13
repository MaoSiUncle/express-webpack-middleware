/**
 * Created by yunlong on 16/9/29.
 */
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers/rootReducer';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    createLogger()
)(createStore)

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState)

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/rootReducer', () => {
            const nextRootReducer = require('../reducers/rootReducer')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}