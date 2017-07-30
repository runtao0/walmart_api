import {
    CHANGE_QUERY,
    CHANGE_BRAND_NAME,
    CHANGE_RESULTS,
    CHANGE_START_AT,
    CHANGE_SORT_BY,
    // RECEIVE_ERROR,
    // RECEIVE_RESULTS
} from '../actions/actions';

const QueryReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    newState.error = null;

    switch (action.type) {
        case CHANGE_QUERY:
            newState.queryString = action.queryString;
            return newState;
        default:
            return state;
    }
}

export default QueryReducer;

// TODO:
//displayQuery
