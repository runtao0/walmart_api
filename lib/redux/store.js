import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root_reducer';
import thunk from './middleware/thunk';
import logger from './middleware/logger';
import defaultState from './default_state';

const configureStore = (preloadedState = defaultState) => (
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk, logger)
    )
)

export default configureStore;
