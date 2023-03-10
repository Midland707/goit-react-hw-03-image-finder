import { LoadButton } from './Button.styled';

export const Button = props => {
  return (
    <LoadButton type="button" onClick={props.onClickButton}>
      Load more
    </LoadButton>
  );
};
