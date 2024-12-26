import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface CustomButtonProps {
  disabled?: boolean;
  onPress: () => void;
  label: string;
  borderColor?: string;
  bgColor: string;
  txtColor: string;
  isLoading?: boolean;
}

export default function CustomButton({
  disabled,
  onPress,
  label,
  bgColor,
  borderColor,
  txtColor,
  isLoading,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled || isLoading}
      onPress={onPress}
      className={`w-full p-4 mt-4 rounded-full ${borderColor} ${
        disabled ? 'bg-gray-300' : `${bgColor}`
      }`}>
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text className={`${txtColor} text-center text-lg font-bold`}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}
