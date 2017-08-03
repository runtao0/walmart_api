import React, { Proptypes } from 'react';
import { CHANGE_QUERY,
    CHANGE_BRAND_NAME,
    CHANGE_NUM_RESULTS,
    CHANGE_START_AT,
    CHANGE_SORT_BY,
    CHANGE_SORT_BY_ORDER,
} from '../../redux/actions/query_actions';

class QueryBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            advanced: false,
        }

        this.queryFields = this.queryFields.bind(this);
        this.changeAdvancedView = this.changeAdvancedView.bind(this);
        this.queryButtons = this.queryButtons.bind(this);
        this.sortByOptions = this.sortByOptions.bind(this);
        this.orderOptions = this.orderOptions.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleAddProducts = this.handleAddProducts.bind(this);
    }

    changeAdvancedView() {
        const { advanced } = this.state;
        this.setState({ advanced: !advanced });
        return;
    }

    handleAddProducts() {
        this.props.fetchQuery(this.props);
    }

    queryFields() {
        const { advanced } = this.state;
        const {
            queryString,
            brandName,
            count,
            startAt,
        } = this.props;
        if( advanced ) {
            return (
                <div className="input-fields">
                    <input type="text"
                        className="flex-full"
                        placeholder="Query (required)"
                        onChange={ this.handleChangeInput(CHANGE_QUERY)}
                        value={ queryString }></input>
                    <input type="text"
                        className="flex-full"
                        placeholder="Brand Name"
                        onChange={ this.handleChangeInput(CHANGE_BRAND_NAME)}
                        value={ brandName }></input>

                    <input type="text"
                        className="flex-half"
                        placeholder="No. Results"
                        onChange={ this.handleChangeInput(CHANGE_NUM_RESULTS)}
                        value={ count }></input>

                    <input type="text"
                        className="flex-half"
                        placeholder="Start at"
                        onChange={ this.handleChangeInput(CHANGE_START_AT)}
                        value={ startAt }></input>

                    { this.sortByOptions() }
                    { this.orderOptions() }
                </div>
            )
        } else {
            return (
                <div className="input-fields">
                    <input type="text"
                        placeholder="Query (required)"
                        onChange={ this.handleChangeInput(CHANGE_QUERY)}
                        value={ queryString }></input>
                </div>
            )
        }
    }

    queryButtons() {
        const { advanced } = this.state;
        return(
            <div className="query-buttons">
                { advanced ?
                    <button
                        className="advanced-toggle"
                        onClick={ this.changeAdvancedView }>Hide Advanced</button>
                    :
                    <button
                        className="advanced-toggle"
                        onClick={ this.changeAdvancedView }>Advanced Search</button>
                }
                <button
                    className="add-products"
                    onClick={ this.handleAddProducts }>Add Products</button>

            </div>
        )
    }

    handleChangeInput(input) {
        return (event) => {
            const val = event.target.value;
            switch (input) {
                case CHANGE_QUERY:
                    this.props.changeQuery(val);
                    break;
                case CHANGE_BRAND_NAME:
                    this.props.changeBrandName(val);
                    break;
                case CHANGE_NUM_RESULTS:
                    this.props.changeNumResults(val);
                    break;
                case CHANGE_START_AT:
                    this.props.changeStartAt(val);
                    break;
                case CHANGE_SORT_BY:
                    this.props.changeSortBy(val);
                    break;
                case CHANGE_SORT_BY_ORDER:
                    this.props.changeOrder(val);
                    break;
                default:
                    return;
            }
        }
    }

    orderOptions() {
        const { order } = this.props;
        return (
            <label className="flex-full">
                Order
                <select value={ order } onChange={ this.handleChangeInput(CHANGE_SORT_BY_ORDER) }>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </label>
        )
    }

    sortByOptions() {
        const { sortBy } = this.props;
        return (
            <label className="flex-full">
                Sorted by
                <select value={ sortBy } onChange={ this.handleChangeInput(CHANGE_SORT_BY) }>
                    <option value="relevance">Relevance</option>
                    <option value="price">Price</option>
                    <option value="title">Product Name</option>
                    <option value="bestSelling">Best Selling</option>
                    <option value="customerRating">Customer Rating</option>
                    <option value="newest">Newest</option>
                </select>
            </label>
        )
    }

    render() {
        return (
            <section className="query-bar">
                { this.queryFields() }
                { this.queryButtons() }
            </section>
        )
    }
}

export default QueryBar;
