import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    search: '',
  };

  onSubmitForm = word => {
    console.log('onSubmitForm =', word);
    this.setState({ search: word });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmitForm={this.onSubmitForm} />
        <ImageGallery searchWord={this.state.search} />
      </div>
    );
  }
}
