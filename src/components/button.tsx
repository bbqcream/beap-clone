import React from 'react';
import {ButtonProps} from '../../types/buttonProps';
import {Dimensions, Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

const {width, height} = Dimensions.get('window');

const Button = ({action, title, color}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={action}
      style={[
        tw`rounded-lg items-center justify-center`,
        {
          paddingHorizontal: width * 0.05,
          paddingVertical: height * 0.02,
          backgroundColor: color,
            zIndex:-2,
        },
      ]}>
      <Text style={{fontSize: width * 0.04, color: 'white', fontWeight: '600'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
