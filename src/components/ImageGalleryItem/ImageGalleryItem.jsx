// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    currentImage: '',
    showModal: false,
  };

  onClickClose = () => {
    this.setState({
      showModal: false,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    document.addEventListener('keydown', this.onKeyEscPress, false);
  }
  onKeyEscPress = event => {
    if (event.keyCode === 27)
      this.setState({
        showModal: false,
      });
  };

  render() {
    const { images } = this.props;
    return (
      <ul className="ImageGallery">
        {images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <li key={id} className="ImageGalleryItem">
            <img
              onClick={e => {
                this.setState({
                  showModal: true,
                  currentImage: largeImageURL,
                });
              }}
              className="ImageGalleryItemImage"
              src={webformatURL}
              alt={tags}
            />
          </li>
        ))}
        {this.state.showModal && (
          <Modal
            image={this.state.currentImage}
            onClickClose={this.onClickClose}
          />
        )}
      </ul>
    );
  }
}
