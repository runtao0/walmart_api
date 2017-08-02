import React, { Proptypes } from 'react';
import QueryBarContainer from '../query_bar/query_bar_container'

class WalmartQueryTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        }

        this.setModal = this.setModal.bind(this);
    }

    setModal() {
        const { modal } = this.state;
        this.setState({ modal: !modal })
    }

    render() {
        return (
            <div>
                <QueryBarContainer/>
            </div>
        )
    }
}

export default WalmartQueryTable;
