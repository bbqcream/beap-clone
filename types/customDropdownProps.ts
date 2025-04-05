export interface CustomDropdownProps {
  items: {label: string; value: string | number}[];
  setItems: React.Dispatch<React.SetStateAction<any[]>>;
  placeholder: string;
  zindex: number;
  changeValue: string;
}
