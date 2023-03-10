import React, { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import {
  ImgGallery,
  ImgGalleryItem,
  ImgGalleryItemImage,
} from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    currentImage: '',
    showModal: false,
    tag: '',
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
      <ImgGallery>
        {images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImgGalleryItem key={id}>
            <ImgGalleryItemImage
              onClick={e => {
                this.setState({
                  showModal: true,
                  currentImage: largeImageURL,
                  tag: tags,
                });
              }}
              src={webformatURL}
              alt={tags}
            />
          </ImgGalleryItem>
        ))}
        {this.state.showModal && (
          <Modal
            image={this.state.currentImage}
            tags={this.state.tag}
            onClickClose={this.onClickClose}
          />
        )}
      </ImgGallery>
    );
  }
}
