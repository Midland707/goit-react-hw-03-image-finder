// import PropTypes from 'prop-types';

import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import * as ImageApi from 'components/ImageApi/ImageApi';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    showBtn: false,
    isLoading: false,
    isEmpty: false,
    error: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchWord !== this.props.searchWord) {
      this.setState({
        query: this.props.searchWord,
        images: [],
      });
    }

    const { query, page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      this.setState({ isLoading: true });
      ImageApi.getImages(query, page)
        .then(data => {
          if (!data.hits.length) {
            this.setState({
              isEmpty: true,
              showBtn: false,
            });
            return;
          }
          console.log('data =', data);
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            showBtn: true,
          }));
          // console.log('data.totalHits = ', data.totalHits);
          if (data.totalHits <= this.state.images.length + 12)
            this.setState({
              showBtn: false,
            });
        })
        .catch(error => {
          this.setState({
            error: error.message,
          });
        })
        .finally(this.setState({ isLoading: false }));
    }
  }

  // scrollToTop = () => {
  //   const c = document.documentElement.scrollTop || document.body.scrollTop;

  //   // if (c > 0) {
  //   //   window.requestAnimationFrame(scrollToTop);
  //   //   window.scrollTo(0, c - c / 5);
  //   // }
  // };

  onClickButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <>
        <ImageGalleryItem images={this.state.images} />
        {this.state.isLoading && <Loader />}
        {this.state.showBtn && <Button onClickButton={this.onClickButton} />}
      </>
    );
  }
}
