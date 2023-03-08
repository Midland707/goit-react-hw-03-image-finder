// import PropTypes from 'prop-types';
import { Component } from 'react';
import * as ImageService from 'service/image-service';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export class ImageGallery extends Component {
  state = {
    query: '',
    page: 1,
  };

  apiQuery = () => {
    console.log('API =', this.props.searchWord);
    const test = ImageService.getImages(this.props.searchWord, this.state.page);
    console.log('API_2 =', test);
  };

  render() {
    return (
      <ul className="ImageGallery">
        {
          /* Набір <li> із зображеннями */
          <ImageGalleryItem ApiQuery={this.apiQuery} />
        }
      </ul>
    );
  }
}
