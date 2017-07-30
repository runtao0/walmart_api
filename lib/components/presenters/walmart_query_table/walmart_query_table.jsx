import React, { Proptypes } from 'react';
import QueryBar from '../query_bar/query_bar'

class WalmartQueryTable extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { queryString } = this.props;
        return (
            <div>
                <QueryBar queryString={ queryString }
                    />
            </div>
        )
    }
}

export default WalmartQueryTable;
