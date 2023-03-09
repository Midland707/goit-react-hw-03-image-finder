export const Modal = ({ image, alt, onClickClose }) => {
  return (
    <div className="Overlay" onClick={onClickClose}>
      <div className="Modal">
        <img src={image} alt={alt} />
      </div>
    </div>
  );
};
