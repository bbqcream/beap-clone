import { ErrorTextProps } from "../../../types/elements/ErrorTextProp";
import * as S from "./style";

const ErrorText = ({ message, condition }: ErrorTextProps) => {
  return (
    <S.Container>
      <S.Text>{condition ? "" : message}</S.Text>
    </S.Container>
  );
};

export default ErrorText;
