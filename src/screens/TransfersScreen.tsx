import React from 'react';
import {Image, Text, View} from 'react-native';
import HeaderContainer from '../components/HeaderContainer';
import calendar from '../assets/icons/calendar.png';
import LatestTransactions from '../components/LatestTransactions';
import {useTransactionsStore} from '../store/useTransactionsStore';

const TransfersScreen = () => {
  const transactions = useTransactionsStore(state => state.transactions);

  return (
    <HeaderContainer action="Back" label="Transfers" showBackButton>
      <View className="pl-5 pr-11 py-8 flex-row w-full rounded-t-[3rem] items-center justify-between">
        <Text className="text-xl font-bold">Latest Transfer</Text>
        <Image source={calendar} style={{width: 25, height: 25}} />
      </View>
      <LatestTransactions data={transactions} />
    </HeaderContainer>
  );
};

export default TransfersScreen;
