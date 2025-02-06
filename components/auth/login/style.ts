import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { height } = Dimensions.get("window");

export const Container = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5%;
`;

export const InputWrapper = styled.View`
  width: 100%;
  display: flex;
  gap: 5%;
  align-items: center;
`;

export const OptionWrapper = styled.View`
  width: 80%;
  display: flex;
  height: ${height * 0.02}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ResetPassword = styled.Text`
  font-size: ${height * 0.015}px;
`;
