import {View, Text} from 'react-native';
import React, {ReactNode} from 'react';
import BackButton from './BackButton';

type HeaderContainerProps = {
  action: 'back' | 'home';
  label: string;
  children?: ReactNode;
};

export default function HeaderContainer({
  action,
  label,
  children,
}: HeaderContainerProps) {
  return (
    <View className="bg-[#0FD08B] items-center h-full">
      <View className="w-full py-6 px-3 flex flex-row items-center justify-between">
        <View className="flex-1">
          <BackButton action={action} />
        </View>
        <Text className="text-white text-2xl font-bold flex-1 text-center">
          {label}
        </Text>
        <View className="flex-1" />
      </View>
      <View className="bg-white w-full h-full rounded-t-[3rem]">
        {children}
      </View>
    </View>
  );
}
