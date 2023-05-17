import * as S from "./styles";

export const Modal = ({
  isOpen = true,
  onClose = () => {},
  children,
  width,
  height,
  ...restProps
}) => {
  if (!isOpen) return null;

  return (
    <S.Container onClick={(event) => onClose(event)} isOpen={isOpen}>
      <S.Children
        onClick={(event) => event.stopPropagation()}
        width={width}
        height={height}
        {...restProps}
      >
        {children}
      </S.Children>
    </S.Container>
  );
};