import React from 'react';
import {ButtonProps} from '../../types/buttonProps';
import {Dimensions, Text} from 'react-native';

const {width, height} = Dimensions.get('window');

const Button = ({action, title, color}: ButtonProps) => {
  return (
    <button
      onClick={action}
      className={`px-${width * 0.05} py-${
        height * 0.03
      } rounded-lg text-white font-semibold ${
        color
          ? `bg-${color}-500 hover:bg-${color}-600`
          : 'bg-blue-500 hover:bg-blue-600'
      }`}>
      <Text style={{fontSize: width * 0.04, color: 'white'}}>{title}</Text>
    </button>
  );
};

export default Button;
