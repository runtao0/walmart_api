import { connect } from 'react-redux';
import TableHeader from './table';
import { changeProductSort,
    changeProductOrder,
    deleteProduct
} from '../../../redux/actions/product_actions';

const mapStateToProps = ({ query, products }) => ({
    sortBy: products.sortBy,
    order: products.order ? products.order : query.sortByOrder,
})

const mapDispatchToProps = (dispatch) => ({
    changeProductSort: (sortBy) => dispatch(changeProductSort(sortBy)),
    changeProductOrder: (order) => dispatch(changeProductOrder(order)),
    deleteProduct: (productNum) => dispatch(deleteProduct(productNum)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TableHeader);
