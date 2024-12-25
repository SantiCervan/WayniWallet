import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import person from '../assets/images/person.png';
import ProfileCardInfo from '../components/ProfileCardInfo';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

export default function SuccessScreen() {
  const navigation = useNavigation();
  const handlePressShare = () => {
    return;
  };
  const handlePressHome = () => {
    navigation.navigate('HomeScreen');
  };
  return (
    <View className="bg-[#0FD08B] items-center flex-1 px-5 pt-16">
      <View className="bg-white w-full h-3/4 rounded-3xl px-5 pt-12 pb-9">
        <Text className="text-center text-lg font-bold text-[#03B961]">
          Transfer Successful
        </Text>
        <Text className="text-center text-[#999]">
          Your transaction was successfull
        </Text>
        <Text className="text-center text-[#121212] text-4xl font-bold mt-7">
          $ 1.500
        </Text>
        <Text className="text-center text-lg font-bold mt-10">Send to</Text>
        <View className="flex-row justify-center items-center gap-5 pt-4">
          <Image
            source={person}
            style={{width: 48, height: 48}}
            resizeMode="contain"
          />
          <View className="w-20">
            <Text className="text-left">Gustavo Fuentes</Text>
          </View>
        </View>
        <ScrollView className="px-5 pt-14">
          <ProfileCardInfo key={1} info="Payment" data="$1.500" />
          <ProfileCardInfo key={2} info="Notes" data="For Food" />
          <ProfileCardInfo key={3} info="Date" data="December 12, 2024" />
          <ProfileCardInfo key={4} info="Time" data="20:32" />
          <ProfileCardInfo key={5} info="Reference Number" data="#999999" />
        </ScrollView>
      </View>
      <View className="pt-3">
        <CustomButton
          label="Share"
          onPress={() => handlePressShare()}
          bgColor="bg-[#0FD08B]"
          txtColor="text-white"
          borderColor="border-[1px] border-white"
        />
        <CustomButton
          label="Back to Home"
          onPress={() => handlePressHome()}
          bgColor="bg-white"
          txtColor="text-[#0FD08B]"
        />
      </View>
    </View>
  );
}
