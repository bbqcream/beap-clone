import { StyledInputProps } from "../../../types/elements/StyleInputProps";
import * as S from "./style";

export default function StyledInput({
  placeholder,
  value,
  onChange,
  name,
  error,
  secureTextEntry,
}: StyledInputProps) {
  return (
    <S.Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      $isError={error}
      secureTextEntry={secureTextEntry}
    />
  );
}
