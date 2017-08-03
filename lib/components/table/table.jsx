import React, { PropTypes } from 'react';
import TableHeaderContainer from './header/table_header_container';
import TableRowContainer from './row/table_row_container';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            perPage: 10,
        }

        this.getRows = this.getRows.bind(this);
        this.pages = this.pages.bind(this);
        this.changePage = this.changePage.bind(this);
        this.displaySortHeader = this.displaySortHeader.bind(this);
    }

    displaySortHeader() {
        const { page, perPage } = this.state;
        const { count } = this.props;
        let orderString;
        return (
            <h3>
                showing results <strong>{ page * perPage + 1 } - { (page * perPage + perPage) > count ? count : page * perPage + perPage}
                </strong> of <strong>{ count }</strong>
            </h3>
        )
    }

    changePage(chosenPage) {
        return () => {
            const { page } = this.state;
            if ((page + 1) === chosenPage) return;
            this.setState({
                page: (chosenPage - 1),
            })
        }
    }

    pages() {
        const { count } = this.props;
        const { page, perPage } = this.state;
        const pages = [ <span key="0">pages: </span> ]
        for (let x = 1; x <= Math.ceil(count / perPage); x++) {
            if (x - 1 === page ) {
                pages.push(<div key={x}>{x}</div>);
            } else {

                pages.push(
                    <div key={x}
                        onClick={ this.changePage(x) }
                        className="not-current-page">{x}</div>
                )
            }
        }
        if (pages.length > 1) return pages;
        return [];
    }

    getRows() {
        const { items } = this.props;
        const { page, perPage } = this.state;
        const rows = [];
        const itemsAlpha = Object.keys(items).sort();
        itemsAlpha.slice((page * perPage), (page * perPage) + perPage).forEach((name) => {
            rows.push(<TableRowContainer
                key={ items[name].itemId }
                item={ items[name] }/>)
        })
        return rows;
    }

    render() {
        return (
            <div>
                { this.displaySortHeader() }
                <table className="main-table">
                    <thead>
                        <TableHeaderContainer/>
                    </thead>
                    <tbody>
                        { this.getRows() }
                    </tbody>
                    <tfoot>
                        <tr className="table-foot">
                            <td>
                            { this.pages() }
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

export default Table;
