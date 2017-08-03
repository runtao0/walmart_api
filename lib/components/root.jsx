import React from 'react';
import { Provider } from 'react-redux';
import WalmartQueryTableContainer from './walmart_query_table/walmart_query_table_container';

const Root = ({ store }) => {
    return (
        <Provider store={ store }>
            <WalmartQueryTableContainer/>
        </Provider>
    )
}

export default Root;
