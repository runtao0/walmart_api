import { connect } from 'react-redux';
import TableHeader from './table_header';
import {
    changeProductOrder,
} from '../../../redux/actions/products_actions';

const mapStateToProps = ({ products }) => ({
    order: products.order
})

const mapDispatchToProps = (dispatch) => ({
    changeProductOrder: (order) => dispatch(changeProductOrder(order)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TableHeader);
