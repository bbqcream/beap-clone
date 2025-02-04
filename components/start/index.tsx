import useHandleNavigation from "../../hooks/useHandleNavigation";
import { COLOR } from "../../style/color/color";
import StyledButton from "../elements/styledButton";
import * as S from "./style";

const StartButton = () => {
  const handleNavigation = useHandleNavigation();
  return (
    <S.Container>
      <StyledButton
        buttonName="로그인"
        buttonColor={COLOR.White}
        textColor={COLOR.Black}
        action={handleNavigation("Signin")}
      />
      <StyledButton
        buttonName="회원가입"
        buttonColor={COLOR.Main}
        textColor={COLOR.White}
        action={handleNavigation("Signup")}
      />
    </S.Container>
  );
};

export default StartButton;
