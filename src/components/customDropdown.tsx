import React, {useState} from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {CustomDropdownProps} from '../../types/customDropdownProps';

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  items,
  setItems,
  placeholder,
  zindex,
  attendData,
  setAttendData,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <View>
      <DropDownPicker
        zIndex={zindex}
        open={open}
        value={attendData}
        items={items}
        setOpen={setOpen}
        setItems={setItems}
        placeholder={placeholder}
        onChangeValue={val => setAttendData(val)}
        dropDownContainerStyle={{borderColor: '#323A45'}}
      />
    </View>
  );
};

export default CustomDropdown;
