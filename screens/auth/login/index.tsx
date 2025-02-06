import React from "react";
import * as S from "./style";
import Signin from "../../../components/auth/login";

export default function LoginPage() {
  return (
    <S.Container>
      <S.Arrow source={require("../../../assets/arrow.png")} />
      <S.Cover>
        <S.Title>로그인</S.Title>
        <Signin />
      </S.Cover>
    </S.Container>
  );
}
