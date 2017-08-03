import merge from 'lodash/merge';
import {
    CHANGE_QUERY,
    CHANGE_BRAND_NAME,
    CHANGE_NUM_RESULTS,
    CHANGE_START_AT,
    CHANGE_SORT_BY,
    CHANGE_SORT_BY_ORDER,
    CHANGE_LOADING,
    OPEN_CONFIRM,
    CLOSE_CONFIRM
} from '../actions/query_actions';

const QueryReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = merge({}, state);
    switch (action.type) {
        case CHANGE_QUERY:
            newState.queryString = action.queryString;
            return newState;
        case CHANGE_BRAND_NAME:
            newState.brandName = action.brandName;
            return newState;
        case CHANGE_NUM_RESULTS:
            newState.numResults = action.numResults;
            return newState;
        case CHANGE_START_AT:
            newState.startAt = action.startAt;
            return newState;
        case CHANGE_SORT_BY:
            newState.sortBy = action.sortBy;
            return newState;
        case CHANGE_SORT_BY_ORDER:
            newState.order = action.order;
            return newState;
        case CHANGE_LOADING:
            newState.loading = action.loading;
            return newState;
        default:
            return state;
    }
}

export default QueryReducer;
