import { connect } from 'react-redux';
import Table from './table';
import {
    changeSearchCount,
    changePage,
    changeSearch
 } from '../../redux/actions/products_actions';

const mapStateToProps = ({ products }, ownProps) => ({
    items: products.items,
    count: products.count,
    productNames: products.productNames,
    searchCount: products.searchCount,
    page: products.page,
    perPage: products.perPage,
    searchTerm: products.searchTerm,
    currentRows: products.currentRows,
    setModal: ownProps.setModal,
})
// modal?

const mapDispatchToProps = (dispatch) => ({
    changeSearchCount: (count) => dispatch(changeSearchCount(count)),
    changeSearch: (searchTerm) => dispatch(changeSearch(searchTerm)),
    changePage: (page) => dispatch(changePage(page)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Table);
