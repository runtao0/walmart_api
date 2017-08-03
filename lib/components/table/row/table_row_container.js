import { connect } from 'react-redux';
import TableRow from './table_row';
import {
    deleteProduct,
    renameBrandName,
} from '../../../redux/actions/products_actions';

const mapStateToProps = (reduxProps, ownProps) => ({
    item: ownProps.item,
    key: ownProps.key,
})

const mapDispatchToProps = (dispatch) => ({
    deleteProduct: (productName) => dispatch(deleteProduct(productName)),
    renameBrandName: (productNum, newName) => dispatch(renameBrandName(productNum, newName))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TableRow);
