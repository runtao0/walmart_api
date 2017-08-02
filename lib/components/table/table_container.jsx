import { connect } from 'react-redux';
import Table from './table';
import { changeQuery,
    fetchQuery
} from '../../redux/actions/actions';

const mapStateToProps = ({ query }) => ({
    queryString: query.displayQuery.queryString,
    brandName: query.displayQuery.brandName,
    numResults: query.displayQuery.numResults,
    startAt: query.displayQuery.startAt,
    sortBy: query.displayQuery.sortBy,
})

const mapDispatchToProps = (dispatch) => ({
    // changeQuery: (queryString) => dispatch(changeQuery(queryString)),
    // fetchQuery: (queryString) => dispatch(fetchQuery(queryString))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Table);
