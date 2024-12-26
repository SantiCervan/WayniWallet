import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import ProfileCardInfo from '../components/ProfileCardInfo';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../utils/constants';
import {NavigationProp, RoutesParamsList} from '../types/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type SuccessScreenProps = NativeStackScreenProps<
  RoutesParamsList,
  Routes.SUCCESS_SCREEN
>;

const SuccessScreen: React.FC<SuccessScreenProps> = ({route}) => {
  const {selectedUser, amount, notes} = route.params;
  const navigation = useNavigation<NavigationProp>();

  const transactionData = [
    {
      id: 1,
      info: `$${amount}`,
      data: 'Payment',
    },
    {
      id: 2,
      info: notes,
      data: 'Notes',
    },
    {
      id: 3,
      info: new Date().toLocaleDateString(),
      data: 'Date',
    },
    {
      id: 4,
      info: new Date().toLocaleTimeString(),
      data: 'Time',
    },
    {
      id: 5,
      info: selectedUser.login.uuid.slice(0, 8),
      data: 'Reference Number',
    },
  ];

  const handlePressShare = () => {
    return;
  };

  const handlePressHome = () => {
    navigation.navigate(Routes.HOME_SCREEN);
  };

  return (
    <View className="bg-[#0FD08B] items-center flex-1 px-5 pt-16">
      <View className="bg-white w-full h-3/4 rounded-3xl px-5 pt-12 pb-9">
        <Text className="text-center text-lg font-bold text-[#03B961]">
          Transfer Successful
        </Text>
        <Text className="text-center text-[#999]">
          Your transaction was successful
        </Text>
        <Text className="text-center text-[#121212] text-4xl font-bold mt-7">
          $ {amount}
        </Text>
        <Text className="text-center text-lg font-bold mt-10">Send to</Text>
        <View className="flex-row justify-center items-center gap-5 pt-4">
          <Image
            source={{uri: selectedUser.picture.medium}}
            style={{width: 48, height: 48, borderRadius: 24}}
            resizeMode="contain"
          />
          <View className="w-20">
            <Text className="text-left">{`${selectedUser.name.first} ${selectedUser.name.last}`}</Text>
          </View>
        </View>
        <ScrollView className="px-5 pt-14">
          {transactionData.map(item => (
            <ProfileCardInfo key={item.id} info={item.info} data={item.data} />
          ))}
        </ScrollView>
      </View>
      <View className="pt-3">
        <CustomButton
          label="Share"
          onPress={handlePressShare}
          bgColor="bg-[#0FD08B]"
          txtColor="text-white"
          borderColor="border-[1px] border-white"
        />
        <CustomButton
          label="Back to Home"
          onPress={handlePressHome}
          bgColor="bg-white"
          txtColor="text-[#0FD08B]"
        />
      </View>
    </View>
  );
};

export default SuccessScreen;
