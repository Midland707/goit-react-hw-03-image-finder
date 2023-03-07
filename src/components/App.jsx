import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import * as ImageService from 'service/image-service';
export class App extends Component {
  state = {
    query: '',
    page: 1,
  };
  onSubmitForm = word => {
    console.log('onSubmitForm =', word);
    this.setState({ query: word });
    // ImageService.getImages(word, this.state.page);
  };

  ApiQuery = () => {
    ImageService.getImages(this.state.query, this.state.page);
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmitForm={this.onSubmitForm} />
        <ImageGallery>
          <ImageGalleryItem ApiQuery={this.ApiQuery} />
        </ImageGallery>
      </div>
    );
  }
}
