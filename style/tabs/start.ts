import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { COLOR } from "@/style/color/color";
const { height } = Dimensions.get("window");

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: ${COLOR.Dark};
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Icon = styled.Image`
  width: ${height * 0.21}px;
  height: ${height * 0.2}px;
`;
