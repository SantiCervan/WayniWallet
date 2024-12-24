import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {ReactNode} from 'react';
import BackButton from './BackButton';
import {useNavigation} from '@react-navigation/native';
import person from '../assets/images/person.png';

type HeaderContainerProps = {
  action: 'Back' | 'Home';
  label: string;
  children?: ReactNode;
  showBalance?: boolean;
  showProfile?: boolean;
  showBackButton?: boolean;
};

export default function HeaderContainer({
  action,
  label,
  children,
  showBalance,
  showProfile,
  showBackButton,
}: HeaderContainerProps) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Profile');
  };

  return (
    <View className="bg-[#0FD08B] items-center flex-1">
      <View className={`${showBalance ? 'h-1/4' : 'py-6'} w-full px-3`}>
        {showProfile && (
          <TouchableOpacity
            className="flex-row items-center py-4 pl-3 gap-2"
            onPress={handlePress}>
            <Image
              source={person}
              style={{width: 32, height: 32}}
              resizeMode="contain"
            />
            <Text className="text-white font-bold text-[15px]">Juan Perez</Text>
          </TouchableOpacity>
        )}
        {showBackButton && (
          <View
            className={` ${
              showBalance && 'py-4'
            } flex-row items-start justify-between`}>
            <View className="flex-1">
              <BackButton action={action} />
            </View>
            <Text className="text-white text-2xl font-bold flex-1 text-center">
              {label}
            </Text>
            <View className="flex-1" />
          </View>
        )}
        {showBalance && (
          <View className="w-full pt-6">
            <Text className="text-white text-center text-[16px]">
              Your Balance
            </Text>
            <Text className="text-white text-center font-bold text-[32px]">
              $ 2.800
            </Text>
          </View>
        )}
      </View>
      <View className="bg-white w-full h-full rounded-t-[3rem]">
        {children}
      </View>
    </View>
  );
}
