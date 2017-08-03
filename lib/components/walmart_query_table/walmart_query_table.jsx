import React, { Proptypes } from 'react';
import QueryBarContainer from '../query_bar/query_bar_container';
import TableContainer from '../table/table_container';
import ConfirmModal from '../modals/confirm_modal';

class WalmartQueryTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        }

        this.setModal = this.setModal.bind(this);
        this.confirmModal = this.confirmModal.bind(this)
;    }


    setModal(message, successFunc) {
        const { modal } = this.state;
        this.setState({
            modal: !modal,
            successFunc,
            message,
         })
    }

    confirmModal() {
        this.state.successFunc();
        this.setModal();
    }

    noProducts () {
        return (
            <h3>There are no products loaded</h3>
        )
    }

    render() {
        const { error, items, loading } = this.props;
        const { modal, message } = this.state;
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
                    </section> }
                { areThereItems &&
                    <section className="table-container">
                        <TableContainer setModal={ this.setModal }/>
                    </section> }
                { loading &&
                    <div id="loader"></div> }
                { modal &&
                    <ConfirmModal
                        message={ message }
                        confirmModal={ this.confirmModal }
                        setModal={ this.setModal }/>
                    }
            </div>
        )
    }
}
// { this.displayQueryHeader() }

// {  displayQuery Header }
export default WalmartQueryTable;
