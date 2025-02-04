import { COLOR } from "../../style/color/color";
import StyledButton from "../elements/styledButton";
import * as S from "./style";

const StartButton = () => {
  return (
    <S.Container>
      <StyledButton
        buttonName="로그인"
        buttonColor={COLOR.White}
        textColor={COLOR.Black}
        action={console.log("안녕")}
      />
      <StyledButton
        buttonName="회원가입"
        buttonColor={COLOR.Main}
        textColor={COLOR.White}
        action={console.log("안녕")}
      />
    </S.Container>
  );
};

export default StartButton;
