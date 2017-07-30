import React, { Proptypes } from 'react';

class QueryBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            advanced: false
        }

        this.changeAdvancedView = this.changeAdvancedView.bind(this);
    }

    changeAdvancedView() {
        const { advanced } = this.state;
        this.setState({ advanced: !advanced });
        return;
    }

    handleAddProducts() {
        const {
            fetchQuery,
            queryString } = this.props;
        fetchQuery
    }

    render() {
        const { advanced } = this.state;
        const { queryString } = this.props;
        if (advanced) {
            return (
                <div>

                    <button onClick={ this.changeAdvancedView }>Hide Advanced</button>
                </div>
            )
        } else {
            return (
                <section>
                    <input type="text"
                        placeholder="Query (required)"
                        value={ queryString }></input>
                    <button onClick={ this.changeAdvancedView }>Advanced Search</button>
                    <button onClick={ this.handleAddProducts }>Add Products</button>
                </section>
            )

        }
    }
}

export default QueryBar;
