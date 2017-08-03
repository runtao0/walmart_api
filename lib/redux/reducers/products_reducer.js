import merge from 'lodash/merge';
import {
    RECEIVE_ERROR,
    RECEIVE_RESULTS,
} from '../actions/query_actions';
import {
    CHANGE_PRODUCT_ORDER,
    DELETE_PRODUCT,
    RENAME_BRANDNAME,
} from '../actions/products_actions';

const ProductsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = merge({}, state);
    newState.error = null;
    // figure out if there's access to query slice
    switch (action.type) {
        case RECEIVE_RESULTS:
            if (action.data.message) {
                newState.error = action.data.message;
                return newState;
            }
            // indicates new query
            newState.displayQuery = action.data.query;
            newState.numItems = action.data.numItems;
            newState.start = action.data.start;
            action.data.items.forEach((item, ind) => {
                //takes care of duplicates, assumes product names are unique
                if (!newState.items[action.data.items[ind].name]) {
                    newState.items[action.data.items[ind].name] = item;
                }
            });
            newState.count = Object.keys(newState.items).length;

            saveToLocal(newState);
            return newState;

        case CHANGE_PRODUCT_ORDER:
            newState.order = action.order;
            return newState;
        case RENAME_BRANDNAME:
            newState.items[action.name].brandName = action.newBrandName;
            saveToLocal(newState);
            return newState;
        case DELETE_PRODUCT:
            delete newState.items[action.productName];
            debugger
            newState.count = Object.keys(newState.items).length;
            saveToLocal(newState);
            return newState;
        case RECEIVE_ERROR:
            newState.error = action.error;
            return newState;
        default:
            return state;
    }
}

const saveToLocal = (state) => {
    localStorage.setItem("walmartQuery",
        JSON.stringify({ products: state }));
}

export default ProductsReducer;
