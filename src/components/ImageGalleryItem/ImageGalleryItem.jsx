// import PropTypes from 'prop-types';

export const ImageGalleryItem = props => {
  return (
    <ul className="ImageGallery">
      {props.images.map(({ id, webformatURL, tags }) => (
        <li key={id} className="ImageGalleryItem">
          <img
            className="ImageGalleryItemImage"
            src={webformatURL}
            alt={tags}
          />
        </li>
      ))}
    </ul>
  );
};
