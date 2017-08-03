import { connect } from 'react-redux';
import TableHeader from './table_header';
import { changeProductSort,
    changeProductOrder,
} from '../../../redux/actions/products_actions';

const mapStateToProps = ({ products }) => ({
    sortBy: products.sortBy,
    order: products.order
})

const mapDispatchToProps = (dispatch) => ({
    changeProductSort: (sortBy) => dispatch(changeProductSort(sortBy)),
    changeProductOrder: (order) => dispatch(changeProductOrder(order)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TableHeader);
