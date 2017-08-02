import {}  from '../actions/products_actions';
import {
    RECEIVE_ERROR,
    RECEIVE_RESULTS,
} from '../actions/query_actions';
import {
    CHANGE_PRODUCT_SORT,
    CHANGE_PRODUCT_ORDER,
    DELETE_PRODUCT,
} from '../actions/products_actions';

const ProductsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    newState.error = null;
    // figure out if there's access to query slice
    switch (action.type) {
        case RECEIVE_RESULTS:
            // indicates new query
            if((state.displayQuery !== action.data.query) ||
               (state.sortBy !== action.data.sort) ||
               (state.totalResults !== action.data.totalResults)
              ) {
                newState.displayQuery = action.data.query;
                newState.numItems = action.data.numItems;
                newState.totalResults = action.data.totalResults;
                newState.sortBy = action.data.sort;
                newState.start = action.data.start;
                newState.items = {};
            } else {
                newState.start = action.data.start;
            }
            action.data.items.forEach((item, ind) => {
                newState.items[action.data.start + ind] = item;
            });
            localStorage.setItem("walmartQuery",
                JSON.stringify({ products: newState }));
            return newState;
        case CHANGE_PRODUCT_ORDER:
            newState.order = action.order;
            return newState;
        case CHANGE_PRODUCT_SORT:
            newState.sortBy = action.sortBy;
            return newState;
        case RECEIVE_ERROR:
            newState.error = action.error;
            return newState;
        default:
            return state;
    }
}

export default ProductsReducer;
