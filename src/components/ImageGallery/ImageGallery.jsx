import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Searchbar } from 'components/Searchbar/Searchbar';
import * as ImageApi from 'components/ImageApi/ImageApi';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

export class ImageGallery extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    showBtn: false,
    isLoading: false,
    error: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      this.setState({ isLoading: true });
      ImageApi.getImages(query, page)
        .then(data => {
          if (!data.hits.length) {
            this.setState({
              showBtn: false,
            });
            return;
          }
          console.log('data =', data);
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            showBtn: true,
          }));
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
        .finally(
          setTimeout(() => {
            this.setState({ isLoading: false });
          }, 500)
        );
    }
  }

  onSubmitForm = word => {
    this.setState({
      query: word,
      images: [],
    });
  };

  onClickButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    scroll.scrollToBottom();
  };

  render() {
    return (
      <>
        <Searchbar onSubmitForm={this.onSubmitForm} />
        <ImageGalleryItem images={this.state.images} />
        {this.state.isLoading && <Loader />}
        {this.state.showBtn && <Button onClickButton={this.onClickButton} />}
      </>
    );
  }
}
