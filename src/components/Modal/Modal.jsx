import { ModalOverlay, ModalWindow } from './Modal.styled';

export const Modal = ({ image, alt, onClickClose }) => {
  return (
    <ModalOverlay onClick={onClickClose}>
      <ModalWindow>
        <img src={image} alt={alt} />
      </ModalWindow>
    </ModalOverlay>
  );
};
