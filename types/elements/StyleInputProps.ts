export interface StyledInputProps {
  placeholder: string;
  value: string | number;
  onChange: (text: any) => void;
  name: string;
  error: boolean;
}
