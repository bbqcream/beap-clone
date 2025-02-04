import { StyledButtonProps } from "../../../types/elements/StyledButtonProps";
import * as S from "./style";

export default function StyledButton({
  buttonName,
  buttonColor,
  textColor,
  action,
}: StyledButtonProps) {
  return (
    <S.Button onPress={action} buttonColor={buttonColor}>
      <S.Text textColor={textColor}>{buttonName}</S.Text>
    </S.Button>
  );
}
