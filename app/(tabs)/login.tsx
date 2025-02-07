import React from "react";
import * as S from "@/style/tabs/login";
import Login from "@/components/auth/login";
import Arrow from "@/assets/images/arrow.svg";

export default function LoginPage() {
  return (
    <S.Container>
      <Arrow />
      <S.Cover>
        <S.Title>로그인</S.Title>
        <Login />
      </S.Cover>
    </S.Container>
  );
}
