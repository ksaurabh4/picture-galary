import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };
  componentDidMount() {
    this.onSearchSubmit('girls');
  }
  onSearchSubmit = async (input) => {
    const res = await unsplash.get('/search/photos', {
      params: { query: input },
    });
    this.setState({ images: res.data.results });
  };
  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar submit={this.onSearchSubmit} />

        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
