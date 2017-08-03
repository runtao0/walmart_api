import React, { PropTypes } from 'react';
import TableHeaderContainer from './header/table_header_container';
import TableRowContainer from './row/table_row_container';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            perPage: 10,
            search: "",
            searchCount: 0,
            rows: [],
        }

        this.getRows = this.getRows.bind(this);
        this.pages = this.pages.bind(this);
        this.changePage = this.changePage.bind(this);
        this.displaySortHeader = this.displaySortHeader.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        this.getRows()
    }

    displaySortHeader() {
        const { page, perPage, search, searchCount } = this.state;
        const { count } = this.props;
        let orderString;
        if (search) {
            return (
                <h3>
                    showing loaded products matching <strong>"{search}"</strong> <br/>
                 <strong>{ page * perPage + 1 } - { (page * perPage + perPage) > searchCount ? searchCount : page * perPage + perPage}</strong> of <strong>{ searchCount }</strong>
                </h3>
            )
        }
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
            }, this.getRows )
        }
    }

    pages() {
        const { count } = this.props;
        const { page, perPage, search, searchCount } = this.state;
        const pages = [ <span key="0">pages: </span> ]
        if (search) {
            for (let x = 1; x <= Math.ceil(searchCount / perPage); x++) {
                if (x - 1 === page ) {
                    pages.push(<div key={x * Math.random()}>{x}</div>);
                } else {

                    pages.push(
                        <div key={x * Math.random()}
                            onClick={ this.changePage(x) }
                            className="not-current-page">{x}</div>
                    )
                }
            }
        } else {
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
        }
        if (pages.length > 1) return pages;
        return [];
    }

    getRows() {
        const { items, order, productNames } = this.props;
        const { page, perPage, search } = this.state;
        const rows = [];
        let modifyProductNames = productNames.slice();
        if (search) {
            modifyProductNames = modifyProductNames.filter((name) => {
                return name.toLowerCase().includes(search.toLowerCase())
            })
        }
        modifyProductNames.slice((page * perPage), (page * perPage) + perPage).forEach((name) => {
            rows.push(<TableRowContainer
                key={ items[name].itemId }
                item={ items[name] }/>)
        })
        this.setState({
            rows,
            searchCount: modifyProductNames.length,
        })
    }

    handleSearch(event) {
        // apply search and restart
        this.setState({
            search: event.target.value,
            page: 0,
        }, this.getRows )
    }

    render() {
        const { search, rows } = this.state;
        return (
            <div>
                <input type="text"
                    className="table-search-local"
                    placeholder="Search products"
                    onChange={ this.handleSearch }
                    value={search}></input>
                { this.displaySortHeader() }
                <table className="main-table">
                    <thead>
                        <TableHeaderContainer/>
                    </thead>
                    <tbody>
                        { rows }
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
