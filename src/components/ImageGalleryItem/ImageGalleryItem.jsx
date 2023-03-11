import PropTypes from 'prop-types';
import { ImgGalleryItem, ImgGalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images, onClickImage }) => {
  return (
    <>
      {images.map(({ id, webformatURL, tags }, index) => (
        <ImgGalleryItem key={id}>
          <ImgGalleryItemImage
            onClick={() => onClickImage(images[index])}
            src={webformatURL}
            alt={tags}
          />
        </ImgGalleryItem>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onClickImage: PropTypes.func.isRequired,
};
