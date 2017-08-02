import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root_reducer';
import thunk from './middleware/thunk';
import logger from './middleware/logger';

// preloadedState from localStorage
const defaultState = {
    query: {
        queryString: "",
        brandName: "",
        numResults: "",
        startAt: "",
        sortBy: "relevance",
        sortByOrder: "desc",
    }
}
const configureStore = (preloadedState = defaultState) => (
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk, logger)
    )
)

export default configureStore;