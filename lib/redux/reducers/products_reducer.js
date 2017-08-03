import React from 'react';
import TableRowContainer from '../../components/table/row/table_row_container';
import merge from 'lodash/merge';
import {
    RECEIVE_ERROR,
    RECEIVE_RESULTS,
} from '../actions/query_actions';
import {
    CHANGE_PRODUCT_ORDER,
    DELETE_PRODUCT,
    RENAME_BRANDNAME,
    SEARCH_COUNT,
    CHANGE_PAGE,
    CHANGE_SEARCH,
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
                } else if (newState.items[action.data.items[ind].name].color !== action.data.items[ind].color) {
                    newState.items[action.data.items[ind].name + " -" + action.data.items[ind].color] = item;
                }
            });
            newState.productNames = Object.keys(newState.items);
            newState.count = Object.keys(newState.items).length;
            newState.productNames.slice((newState.page * newState.perPage), (newState.page * newState.perPage) + newState.perPage).forEach((name) => {
                newState.currentRows.push(newState.items[name])
            })
            saveToLocal(newState);
            return newState;

        case CHANGE_PRODUCT_ORDER:
            newState.order = action.order;
            return newState;
        case RENAME_BRANDNAME:
            newState.items[action.name].brandName = action.newBrandName;
            newState.currentRows = [];
            newState.productNames.slice((newState.page * newState.perPage), (newState.page * newState.perPage) + newState.perPage).forEach((name) => {
                newState.currentRows.push(newState.items[name])
            })
            saveToLocal(newState);
            return newState;
        case DELETE_PRODUCT:
            delete newState.items[action.productName];
            newState.productNames = Object.keys(newState.items);
            if (newState.order = "desc") newState.productNames.reverse();
            newState.count = Object.keys(newState.items).length;
            newState.currentRows = [];
            newState.productNames.slice((newState.page * newState.perPage), (newState.page * newState.perPage) + newState.perPage).forEach((name) => {
                newState.currentRows.push(newState.items[name])
            })
            saveToLocal(newState);
            return newState;
        case CHANGE_SEARCH:
            newState.searchTerm = action.searchTerm;
            newState.currentRows = [];
            newState.productNames = newState.productNames.filter((name) => {
                return name.toLowerCase().includes(search.toLowerCase())
            })
            newState.searchCount = productNames.length;
            return newState;
        case CHANGE_PAGE:
            newState.page = action.page;
            newState.currentRows = []
            newState.productNames.slice((newState.page * newState.perPage), (newState.page * newState.perPage) + newState.perPage).forEach((name) => {
                newState.currentRows.push(newState.items[name])
            })
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
