import { combineReducers } from 'redux';
import QueryReducer from './query_reducer';

const rootReducer = combineReducers({
    query: QueryReducer
})

export default rootReducer;
