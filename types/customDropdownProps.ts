interface CustomDropdownProps {
  items: Array<{label: string; value: string}>;
  setItems: React.Dispatch<
    React.SetStateAction<Array<{label: string; value: string}>>
  >;
  placeholder: string;
  zindex: number;
}
