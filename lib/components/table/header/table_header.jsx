import React, { PropTypes } from 'react';

const categories = {
    1: "Product",
    2: "Brand Name",
    3: "Category",
    4: "Price",
    5: "MSRP",
    6: "Reviews"
}

class TableHeader extends React.Component {
    constructor(props) {
        super(props);

        this.generateCategories = this.generateCategories.bind(this);
        this.handleChangeOrder = this.handleChangeOrder.bind(this);
    }

    handleChangeOrder() {
        const { changeProductOrder, order } = this.props;
        if (order === "asc") changeProductOrder("desc");
        if (order === "desc") changeProductOrder("asc");
    }

    generateCategories() {
        const { sortBy, order } = this.props
        const fields = [];
        let orderArrow;
        if (order === "asc") {
            orderArrow = <img src="assets/menu-up.png"
                className="table-sort-arrow"
                onClick={ this.handleChangeOrder }></img>;
        } else if (order === "desc") {
            orderArrow = <img src="assets/menu-down.png"
                className="table-sort-arrow"
                onClick={ this.handleChangeOrder }></img>;
        }
        Object.keys(categories).forEach((key) => {
            if (categories[key] === "Product") {
                fields.push(
                    <HeaderCell key={key}
                        category={categories[key]}
                        arrow={ orderArrow }/>
                )

            } else {
                fields.push(
                    <HeaderCell key={key}
                        category={categories[key]}/>
                )

            }
        })

        return fields;
    }

    render() {
        return (
            <tr>
            { this.generateCategories() }
            </tr>
        )
    }
}

const HeaderCell = ({ category, arrow }) => {
    return (
        <th>
            <div className={arrow ? "sort-category" : ""}>
                { category }
                { arrow && arrow }
            </div>
        </th>
    )
}
export default TableHeader;
