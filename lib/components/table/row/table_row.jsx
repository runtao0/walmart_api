

import React, { Proptypes } from 'react';

class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            brandNameVal: ""
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleToggleEdit = this.handleToggleEdit.bind(this);
        this.renderProduct = this.renderProduct.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.renderProduct = this.renderProduct.bind(this);
        this.renderBrandName = this.renderBrandName.bind(this);
        this.renderCategory = this.renderCategory.bind(this);
        this.renderPrice = this.renderPrice.bind(this);
        this.renderMSRP = this.renderMSRP.bind(this);
        this.renderReviews = this.renderReviews.bind(this);
    }

    handleDelete () {
        const { name } = this.props.item;
        this.props.deleteProduct(name);
    }

    handleChangeInput(event) {
        this.setState({
            brandNameVal: event.target.value,
        })
    }

    handleToggleEdit() {
        const { edit } = this.state;
        this.setState({
            edit: !edit,
        })
    }

    handleSave() {
        const { brandNameVal } = this.state;
        const { name } = this.props.item

        if (brandNameVal !== "")this.props.renameBrandName(name, brandNameVal);
        this.setState({
            edit: false,
            brandNameVal: '',
        })
        return;
    }

    editLine() {
        const { brandNameVal } = this.state;
        return (
            <td className="table-brandname">
                <div>
                    <input type="text"
                        className="nickname-input"
                        onChange={ this.handleChangeInput }
                        value={ brandNameVal }></input>
                    <button className="edit-toggle"
                        onClick={ this.handleSave }>Save</button>
                </div>
            </td>
        )
    }

    renderProduct() {
        const { thumbnailImage, name, productUrl } = this.props.item;
        return(
            <td >
                <div className="table-product">
                    <div>
                        <img className="thumbnail" src={ thumbnailImage }></img>
                        <h4 title={name}>{ name }</h4>
                    </div>
                    <a target="_blank"
                        href={ productUrl }><img src="assets/open-in-new.png"></img></a>
                </div>
            </td>
        )
    }

    renderBrandName() {
        const { brandName } = this.props.item;
        return (
            <td className="table-brandname" onClick={ this.handleToggleEdit }>
                <h4>{ brandName }</h4>
            </td>
        )
    }

    renderCategory() {
        const { categoryPath } = this.props.item;
        const displayCategory = categoryPath.split("/").join(" > ")
        return(
            <td className="table-category">
                <h4>{ displayCategory }</h4>
            </td>
        )
    }

    renderPrice() {
        const { salePrice } = this.props.item;
        return(
            <td>
                <h4>${ Math.round(100 * salePrice) / 100 }</h4>
            </td>
        )
    }

    renderMSRP(){
        const { msrp } = this.props.item;
        return(
            <td className={ msrp ? 'msrp' : 'no-msrp'}>
                <h4>{ msrp ? `$${ Math.round(100 * msrp) / 100}` : '(none)'}</h4>
            </td>
        )
    }

    renderReviews() {
        const { customerRatingImage, numReviews } = this.props.item;
        return(
            <td>
                <div className="table-review-delete">
                    <div className="ratings">
                        <img src={ customerRatingImage }></img>
                        <h4>({ numReviews || 0 })</h4>
                    </div>
                    <img src="assets/close.png"
                        className="table-delete"
                        onClick={ this.handleDelete }></img>
                </div>
            </td>
        )
    }
    render() {
        const { edit } = this.state;
        return(
            <tr>
                { this.renderProduct() }
                { edit ? this.editLine() : this.renderBrandName() }
                { this.renderCategory() }
                { this.renderPrice() }
                { this.renderMSRP() }
                { this.renderReviews() }
            </tr>
        )
    }
}

export default TableRow;
