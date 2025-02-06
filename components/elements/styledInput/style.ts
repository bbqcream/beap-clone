import styled from "styled-components/native";
import { COLOR } from "../../../style/color/color";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");

export const Input = styled.TextInput`
  width: 80%;
  height: ${height * 0.08}px;
  border: 1px solid ${COLOR.Gray};
  padding: ${width * 0.03}px;
  border-radius: ${height * 0.01}px;
`;
