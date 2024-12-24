import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ScrollSendAgain from '../components/ScrollSendAgain';
import person from '../assets/icons/home.png';
import {useNavigation} from '@react-navigation/native';
import LatestTransactions from '../components/LatestTransactions';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Profile');
  };
  return (
    <SafeAreaProvider>
      <View className="bg-[#0FD08B] h-full">
        <View className="h-1/4 w-full">
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
          <View className="w-full pt-4">
            <Text className="text-white text-center text-[16px]">
              Your Balance
            </Text>
            <Text className="text-white text-center font-bold text-[32px]">
              $ 2.800
            </Text>
          </View>
        </View>
        <View className="bg-white h-3/4 rounded-t-[3rem] px-3 pt-6">
          <Text className="text-[#121212] text-center text-2xl font-bold">
            Send Again
          </Text>
          <ScrollSendAgain />
          <LatestTransactions />
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
