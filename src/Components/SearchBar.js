import React from 'react';

class SearchBar extends React.Component {
  state = { text: '' };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.submit(this.state.text);
  };

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Search</label>
            <input
              type='text'
              value={this.state.text}
              onChange={(event) => this.setState({ text: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
