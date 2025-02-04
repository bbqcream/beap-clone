import styled from "styled-components/native";
import { COLOR } from "../../../style/color/color";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export const Container = styled.View`
  height: 100%;
`;

export const Text = styled.Text`
  color: ${COLOR.Red};
  font-size: ${width * 0.03}px;
`;
