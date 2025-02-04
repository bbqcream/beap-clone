import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { height } = Dimensions.get("window");

export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.buttonColor};
  width: 80%;
  height: ${height * 0.07}px;
  border-radius: ${height * 0.01}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${(props) => props.textColor};
  font-weight: 500;
  font-size: ${height * 0.02}px;
`;
