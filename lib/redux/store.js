import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root_reducer';
import thunk from './middleware/thunk';
import logger from './middleware/logger';

// preloadedState from localStorage
let defaultState = {
    query: {
        queryString: "",
        brandName: "",
        numResults: "",
        startAt: "",
        sortBy: "relevance",
        order: "desc",
    },
    products: {
        order: 'desc',
        items: false
    }
}

if (localStorage.hasOwnProperty("walmartQuery")) {
    defaultState = JSON.parse(localStorage.getItem('walmartQuery'));
}

const configureStore = (preloadedState = defaultState) => (
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk, logger)
    )
)

export default configureStore;
