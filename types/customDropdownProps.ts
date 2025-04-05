export interface CustomDropdownProps {
  items: any[];
  setItems: React.Dispatch<React.SetStateAction<any[]>>;
  placeholder: string;
  zindex: number;
  attendData: string | number | null;
  setAttendData: (value: string | number) => void;
}
