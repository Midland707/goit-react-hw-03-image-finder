import PropTypes from 'prop-types';
import { ImgGallery } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onClickImage }) => {
  return (
    <ImgGallery>
      <ImageGalleryItem images={images} onClickImage={onClickImage} />
    </ImgGallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onClickImage: PropTypes.func.isRequired,
};
