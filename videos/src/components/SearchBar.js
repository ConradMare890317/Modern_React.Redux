import React from 'react';
import button from './Semantic-ui';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = event => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search
                        <button class="ui vertical animated button">
                            <div class="hidden content">Go!</div>
                                <div class="visible content">
                                <i aria-hidden="true" class="search icon">

                                </i>
                                </div>
                                </button>
                                </label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
