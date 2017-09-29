/**
 * Created by deepcoder on 29/09/17.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

export default function configureStore() {
    return createStore(rootReducer,enhancer);
};