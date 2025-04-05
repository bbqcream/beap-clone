import React, {useState} from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {CustomDropdownProps} from '../../types/customDropdownProps';
import useAttendState from '../../store/attendState';

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  items,
  setItems,
  placeholder,
  zindex,
  changeValue,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<number | string | null>(null);
  const {setAttendData} = useAttendState();

  const handleValueChange = (selectedValue: number | string | null) => {
    setValue(selectedValue);
    if (changeValue === 'period') {
      setAttendData({period: Number(selectedValue)});
    } else if (changeValue === 'room') {
      setAttendData({room: String(value)});
    }
  };

  return (
    <View>
      <DropDownPicker
        zIndex={zindex}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={handleValueChange}
        placeholder={placeholder}
        dropDownContainerStyle={{borderColor: '#323A45'}}
      />
    </View>
  );
};

export default CustomDropdown;
