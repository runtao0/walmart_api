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
    }

    generateCategories() {
        const { sortBy, order } = this.props
        const fields = [];
        let orderArrow;
        if (order === "asc") {
            orderArrow = <i class="mdi mdi-menu-up"></i>;
        } else if (order === "desc") {
            orderArrow = <i class="mdi mdi-menu-down"></i>;
        }
        Object.keys(categories).forEach((key) => {
            fields.push(
                <th key={key}>
                    { categories[key] }
                    { sortBy === categories[key] &&
                        orderArrow
                    }
                </th>
            )
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

export default TableHeader;
