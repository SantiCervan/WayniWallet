import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ScrollSendAgain from '../components/ScrollSendAgain';
import icon from '../assets/icons/home.png';
import LatestTransactions from '../components/LatestTransactions';
import HeaderContainer from '../components/HeaderContainer';

const HomeScreen = () => {
  const transactions = [
    {
      id: 1,
      amount: 450000,
      date: 'Today · 10:00',
      label: 'Netflix Subscription',
      icon: icon,
      isSubtraction: true,
    },
    {
      id: 2,
      amount: 750000,
      date: 'Today · 09:30',
      label: 'Salary Deposit',
      icon: icon,
      isAddition: true,
    },
    {
      id: 3,
      amount: 120000,
      date: 'Yesterday · 15:20',
      label: 'Grocery Shopping',
      icon: icon,
      isSubtraction: true,
    },
    {
      id: 4,
      amount: 250000,
      date: 'Yesterday · 14:00',
      label: 'Freelance Payment',
      icon: icon,
      isAddition: true,
    },
    {
      id: 5,
      amount: 85000,
      date: '2 days ago · 11:30',
      label: 'Restaurant Bill',
      icon: icon,
      isSubtraction: true,
    },
    {
      id: 6,
      amount: 300000,
      date: '2 days ago · 10:15',
      label: 'Client Transfer',
      icon: icon,
      isAddition: true,
    },
    {
      id: 7,
      amount: 175000,
      date: '3 days ago · 16:45',
      label: 'Online Shopping',
      icon: icon,
      isSubtraction: true,
    },
    {
      id: 8,
      amount: 950000,
      date: '3 days ago · 09:00',
      label: 'Investment Return',
      icon: icon,
      isAddition: true,
    },
    {
      id: 9,
      amount: 65000,
      date: '4 days ago · 13:20',
      label: 'Taxi Ride',
      icon: icon,
      isSubtraction: true,
    },
    {
      id: 10,
      amount: 425000,
      date: '4 days ago · 08:30',
      label: 'Consulting Fee',
      icon: icon,
      isAddition: true,
    },
  ];

  return (
    <SafeAreaProvider>
      <HeaderContainer action="Back" label="Home" showProfile showBalance>
        <View className="px-3">
          <Text className="text-[#121212] text-center text-2xl font-bold pt-6">
            Send Again
          </Text>
          <ScrollSendAgain />
          <Text className="text-[#121212] text-center text-2xl font-bold py-4">
            Latest Transactions
          </Text>
          <LatestTransactions data={transactions} />
        </View>
      </HeaderContainer>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
