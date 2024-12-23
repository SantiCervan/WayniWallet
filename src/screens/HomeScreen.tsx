import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ScrollSendAgain from '../components/ScrollSendAgain';

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <View className="bg-[#0FD08B] h-full">
        <View className="h-1/4">
          <Text className="text-red-500">Home Screen</Text>
        </View>
        <View className="bg-white h-3/4 rounded-t-[3rem] px-3 pt-5">
          <Text className="text-[#121212] text-2xl font-bold">Send Again</Text>
          <ScrollSendAgain />
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
