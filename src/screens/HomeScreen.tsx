import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import ScrollSendAgain from '../components/ScrollSendAgain';
import LatestTransactions from '../components/LatestTransactions';
import HeaderContainer from '../components/HeaderContainer';
import {useRandomUser} from '../utils/hooks/useRandomUser';
import {useUserStore} from '../store/useUserStore';
import {useTransactionsStore} from '../store/useTransactionsStore';

const HomeScreen = () => {
  const {data} = useRandomUser();
  const setUser = useUserStore(state => state.setUser);
  const user = useUserStore(state => state.user);
  const transactions = useTransactionsStore(state => state.transactions);

  useEffect(() => {
    if (data?.results[0] && !user) {
      setUser(data.results[0]);
    }
  }, [data]);

  return (
    <HeaderContainer action="Back" label="Home" showProfile showBalance>
      <View className="px-3">
        <Text className="text-[#121212] text-center text-2xl font-bold pt-6">
          Send Again
        </Text>
        <ScrollSendAgain />
        <Text className="text-[#121212] text-center text-2xl font-bold py-4">
          Latest Transactions
        </Text>
      </View>
      <LatestTransactions data={transactions} />
    </HeaderContainer>
  );
};

export default HomeScreen;
