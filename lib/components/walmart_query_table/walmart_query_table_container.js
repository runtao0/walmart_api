import { connect } from 'react-redux';
import WalmartQueryTable from './walmart_query_table';
import { changeProductSort,
    changeProductOrder,
    deleteProduct
} from '../../redux/actions/products_actions';


const mapStateToProps = ({ query, products }) => ({
    items: products.items,
    displayQuery: products.displayQuery,
    brandName: products.brandName,
    count: products.count,
    sortBy: products.sortBy,
    order: products.order,
    startAt: products.start,
    error: products.error,
    loading: query.loading,
})

const mapDispatchToProps = (dispatch) => ({
    changeProductOrder: (order) => dispatch(changeProductOrder(order)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WalmartQueryTable);
