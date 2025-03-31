import React, {useState} from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  items,
  setItems,
  placeholder,
  zindex,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

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
        placeholder={placeholder}
        dropDownContainerStyle={{borderColor: '#323A45'}}
      />
    </View>
  );
};

export default CustomDropdown;
