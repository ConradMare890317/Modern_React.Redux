import React from 'react';
import { Button, Icon } from 'semantic-ui-react';


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
      <div className="search-bar ui raised segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search
              <Button animated='fade'>
                <Button.Content visible>
                  <Icon name='search'/>
                </Button.Content>
                <Button.Content hidden>
                  Go
                </Button.Content>
              </Button>
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
