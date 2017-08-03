import React, { Proptypes } from 'react';
import QueryBarContainer from '../query_bar/query_bar_container';
import TableContainer from '../table/table_container';

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



    noProducts () {
        return (
            <h3>There are no products loaded</h3>
        )
    }

    render() {
        const { error, items } = this.props;
        const areThereItems = Object.keys(items).length > 0;

        return (
            <div>
                <QueryBarContainer/>
                { (error || !areThereItems) &&
                    <section className="messages">
                        { error &&
                            <h2>{ error }</h2>
                        }
                        { !areThereItems &&
                            this.noProducts()
                        }
                    </section>
                }
                { areThereItems &&
                    <section className="table-container">
                        <TableContainer/>
                    </section>
                }
            </div>
        )
    }
}
// { this.displayQueryHeader() }

// {  displayQuery Header }
export default WalmartQueryTable;
