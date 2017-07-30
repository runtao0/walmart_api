import React from 'react';
import { Provider } from 'react-redux';
import TableContainer from './containers/table_container';

const Root = ({ store }) => {
    return (
        <Provider store={ store }>
            <TableContainer/>
        </Provider>
    )
}

export default Root;
