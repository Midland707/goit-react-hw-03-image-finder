import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export class App extends Component {
  onSubmitForm = eventSubmit => {
    eventSubmit.preventDefault();
    console.log(eventSubmit.target);
  };

  render() {
    return (
      <div>
        <Searchbar onSubmitForm={this.onSubmitForm} />
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
      </div>
    );
  }
}

// const BASE_URL = 'https://pixabay.com/api/';
// const key = '32874218-f955783fbc8df841e2f172dbc';
// const imgOnPage = 40;
// let pageNumber = 1;
// https://pixabay.com/api/?key=32874218-f955783fbc8df841e2f172dbc&q=SEARCH&image_type=photo&orientation=horizontal&safesearch=true
