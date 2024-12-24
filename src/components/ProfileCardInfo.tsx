import {View, Text} from 'react-native';
import React from 'react';

interface ProfileCardInfoProps {
  data: string;
  info: string;
}

export default function ProfileCardInfo({data, info}: ProfileCardInfoProps) {
  return (
    <View className="flex-row justify-between items-center mb-4">
      <Text className="w-1/4 text-[#999]">{data}</Text>
      <Text className="text-right w-3/4 font-bold">{info}</Text>
    </View>
  );
}