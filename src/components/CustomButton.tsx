import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface CustomButtonProps {
  disabled?: boolean;
  onPress: () => void;
  label: string;
  borderColor?: string;
  bgColor: string;
  txtColor: string;
}

export default function CustomButton({
  disabled,
  onPress,
  label,
  bgColor,
  borderColor,
  txtColor,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      className={`w-full p-4 mt-4 rounded-full ${borderColor} ${
        disabled ? 'bg-gray-300' : `${bgColor}`
      }`}>
      <Text className={`${txtColor} text-center text-lg font-bold`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
