import * as S from "./style";
import StartButton from "../../components/start";

export default function Start() {
  return (
    <S.Container>
      <S.Icon source={require("../../assets/splashIcon.png")} />
      <StartButton />
    </S.Container>
  );
}
