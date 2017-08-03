import React, { PropTypes } from 'react';
import TableHeaderContainer from './header/table_header_container';
import TableRowContainer from './row/table_row_container';

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.packageRows = this.packageRows.bind(this);
        this.pages = this.pages.bind(this);
        this.changePage = this.changePage.bind(this);
        this.displaySortHeader = this.displaySortHeader.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    displaySortHeader() {
        const { page, perPage, searchTerm, searchCount, count } = this.props;
        let orderString;
        if (searchTerm) {
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
            const { page } = this.props;
            if ((page + 1) === chosenPage) return;
            this.props.changePage(chosenPage);
        }
    }

    pages() {
        const { count, page, perPage, searchCount, searchTerm } = this.props;
        const pages = [ <span key="0">pages: </span> ]
        if (searchTerm) {
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

    // getRows() {
    //     const { items, order, productNames } = this.props;
    //     const { page, perPage, search } = this.state;
    //     const rows = [];
    //     let modifyProductNames = productNames.slice();
    //     if (search) {
    //         modifyProductNames = modifyProductNames.filter((name) => {
    //             return name.toLowerCase().includes(search.toLowerCase())
    //         })
    //     }
    //     modifyProductNames.slice((page * perPage), (page * perPage) + perPage).forEach((name) => {
    //         rows.push(<TableRowContainer
    //             key={ items[name].itemId }
    //             item={ items[name] }/>)
    //     })
    //     this.setState({
    //         rows,
    //         searchCount: modifyProductNames.length,
    //     })
    // }

    handleSearch(event) {
        // apply search and restart
        this.props.changeSearch(event.target.value);
    }

    packageRows() {
        const { currentRows } = this.props;
        const rows = []
        currentRows.forEach((item) => {
            rows.push(
                <TableRowContainer
                    key={item.itemId}
                    item={ item }/>
            )
        })
        return rows;
    }

    render() {
        const { searchTerm } = this.props;
        return (
            <div>
                <input type="text"
                    className="table-search-local"
                    placeholder="Search products"
                    onChange={ this.handleSearch }
                    value={searchTerm}></input>
                { this.displaySortHeader() }
                <table className="main-table">
                    <thead>
                        <TableHeaderContainer/>
                    </thead>
                    <tbody>
                        { this.packageRows() }
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
