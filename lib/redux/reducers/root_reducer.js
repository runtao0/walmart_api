import { combineReducers } from 'redux';
import QueryReducer from './query_reducer';
import ProductsReducer from './products_reducer';

const rootReducer = combineReducers({
    query: QueryReducer,
    products: ProductsReducer,
})

export default rootReducer;
