import { connect } from 'react-redux';
import QueryBar from './query_bar';
import { changeQuery,
    changeBrandName,
    changeNumResults,
    changeStartAt,
    changeSortBy,
    changeOrder,
    fetchQuery,
    changeLoading,
} from '../../redux/actions/query_actions';

const mapStateToProps = ({ query }) => ({
    queryString: query.queryString || "",
    brandName: query.brandName || "",
    numResults: query.numResults || "",
    startAt: query.startAt || "",
    sortBy: query.sortBy || "relevance",
    order: query.order || "desc",
})

const mapDispatchToProps = (dispatch) => ({
    changeQuery: (queryString) => dispatch(changeQuery(queryString)),
    changeBrandName: (brandName) => dispatch(changeBrandName(brandName)),
    changeNumResults: (results) => dispatch(changeNumResults(results)),
    changeStartAt: (startAt) => dispatch(changeStartAt(startAt)),
    changeSortBy: (sortBy) => dispatch(changeSortBy(sortBy)),
    changeOrder: (order) => dispatch(changeOrder(order)),
    fetchQuery: (queryOptions) => dispatch(fetchQuery(queryOptions)),
    changeLoading: (loading) => dispatch(changeLoading(loading)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QueryBar);
