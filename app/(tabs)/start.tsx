import StartButton from "@/components/start";
import * as S from "@/style/tabs/start";
import Icon from "@/assets/images/splashIcon.svg";

export default function StartPage() {
  return (
    <S.Container>
      <Icon />
      <StartButton />
    </S.Container>
  );
}
