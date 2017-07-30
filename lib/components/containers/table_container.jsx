import { connect } from 'react-redux';
import WalmartQueryTable from '../presenters/walmart_query_table/walmart_query_table';
import { changeQuery,
    fetchQuery
} from '../../redux/actions/actions';

const mapStateToProps = ({ query }) => ({
    queryString: query.queryString,
    data: query.data,
    displayQuery: query.displayQuery
})

const mapDispatchToProps = (dispatch) => ({
    changeQuery: (queryString) => dispatch(changeQuery(queryString)),
    fetchQuery: (queryString) => dispatch(fetchQuery(queryString))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WalmartQueryTable);
