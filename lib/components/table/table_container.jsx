import { connect } from 'react-redux';
import Table from './table';
import { changeSearchCount } from '../../redux/actions/products_actions';

const mapStateToProps = ({ products }, ownProps) => ({
    items: products.items,
    count: products.count,
    productNames: products.productNames,
    searchCount: products.searchCount,
    setModal: ownProps.setModal,
})

const mapDispatchToProps = (dispatch) => ({
    changeSearchCount: (count) => dispatch(changeSearchCount(count)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Table);
