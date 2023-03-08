import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchWord: '',
  };

  onSubmitForm = word => {
    this.setState({ searchWord: word });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmitForm={this.onSubmitForm} />
        <ImageGallery searchWord={this.state.searchWord} />
      </div>
    );
  }
}
