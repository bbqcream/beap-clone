import { TouchableOpacity } from "react-native";
import { COLOR } from "../../../style/color/color";
import StyledButton from "../../elements/styledButton";
import StyledInput from "../../elements/styledInput";
import * as S from "./style";
import ErrorText from "../../elements/errorText";
import { useLoginDataStore } from "../../../store/login/useLoginDataStore";
import useLogin from "../../../hooks/useLogin";

const Login = () => {
  const { loginData } = useLoginDataStore();
  const { handleData, onSubmit } = useLogin();
  return (
    <S.Container>
      <S.InputWrapper>
        <StyledInput
          name="email"
          placeholder="이메일"
          value={loginData.email}
          onChange={(text) => handleData("email", text)}
          error={false}
        />
        <StyledInput
          name="비밀번호"
          placeholder="비밀번호"
          value={loginData.password}
          onChange={(text) => handleData("password", text)}
          error={false}
          secureTextEntry={true}
        />
      </S.InputWrapper>
      <S.OptionWrapper>
        <ErrorText message="비밀번호가 일치하지 않습니다." condition={true} />
        <TouchableOpacity>
          <S.ResetPassword>비밀번호를 잊어버리셨나요?</S.ResetPassword>
        </TouchableOpacity>
      </S.OptionWrapper>
      <StyledButton
        textColor={COLOR.White}
        buttonColor={COLOR.Dark}
        buttonName="로그인"
        action={onSubmit}
      />
    </S.Container>
  );
};

export default Login;
