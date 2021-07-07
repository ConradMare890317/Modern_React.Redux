import React, { useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
      <div className="search-bar ui raised segment">
        <form onSubmit={onSubmit} className="ui form">
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
              value={term}
              onChange={(event) => setTerm(event.taget.value)}
            />
          </div>
        </form>
      </div>
    );
};

export default SearchBar;
