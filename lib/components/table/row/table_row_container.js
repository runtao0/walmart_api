import { connect } from 'react-redux';
import TableRow from './table_row';
import {
    deleteProduct,
    renameBrandName,
} from '../../../redux/actions/products_actions';

import { openConfirm } from '../../../redux/actions/query_actions';

const mapStateToProps = (reduxProps, ownProps) => ({
    item: ownProps.item,
    setModal: ownProps.setModal,
})

const mapDispatchToProps = (dispatch) => ({
    deleteProduct: (productName) => dispatch(deleteProduct(productName)),
    renameBrandName: (productNum, newName) => dispatch(renameBrandName(productNum, newName)),
    openConfirm: (message, successFunc) => dispatch(openConfirm(message, successFunc)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TableRow);
