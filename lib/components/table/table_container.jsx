import { connect } from 'react-redux';
import Table from './table';
import { changeQuery,
    fetchQuery
} from '../../redux/actions/query_actions';

const mapStateToProps = ({ products }) => ({
    items: products.items,
    count: products.count
})


export default connect(
    mapStateToProps
)(Table);
