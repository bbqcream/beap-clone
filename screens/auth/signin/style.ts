import styled from "styled-components/native";
import { COLOR } from "../../../style/color/color";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: ${COLOR.Dark};
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

export const Cover = styled.View`
  width: 100%;
  height: 80%;
  border-top-left-radius: ${width * 0.1}px;
  background-color: ${COLOR.White};
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 20%;
`;

export const Title = styled.Text`
  position: absolute;
  top: 5%;
  left: 9%;
  font-size: ${width * 0.07}px;
  font-weight: 600;
`;

export const Arrow = styled.Image`
  position: absolute;
  top: 7%;
  left: 7%;
  width: ${width * 0.05}px;
  height: ${width * 0.08}px;
`;
