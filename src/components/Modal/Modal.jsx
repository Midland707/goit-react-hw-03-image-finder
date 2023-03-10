import PropTypes from 'prop-types';
import { ModalOverlay, ModalWindow } from './Modal.styled';

export const Modal = ({ image, onClickClose }) => {
  return (
    <ModalOverlay onClick={onClickClose}>
      <ModalWindow>
        <img src={image} />
      </ModalWindow>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onClickClose: PropTypes.func.isRequired,
};
