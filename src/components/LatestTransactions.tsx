import {View, Text, FlatList} from 'react-native';
import React from 'react';
import TransactionCards from './TransactionCards';
import person from '../assets/icons/home.png';

export default function LatestTransactions() {
  const transactions = [
    {
      id: 1,
      amount: 450000,
      date: 'Today · 10:00',
      label: 'Netflix Subscription',
      icon: person,
      isSubtraction: true,
    },
    {
      id: 2,
      amount: 750000,
      date: 'Today · 09:30',
      label: 'Salary Deposit',
      icon: person,
      isAddition: true,
    },
    {
      id: 3,
      amount: 120000,
      date: 'Yesterday · 15:20',
      label: 'Grocery Shopping',
      icon: person,
      isSubtraction: true,
    },
    {
      id: 4,
      amount: 250000,
      date: 'Yesterday · 14:00',
      label: 'Freelance Payment',
      icon: person,
      isAddition: true,
    },
    {
      id: 5,
      amount: 85000,
      date: '2 days ago · 11:30',
      label: 'Restaurant Bill',
      icon: person,
      isSubtraction: true,
    },
    {
      id: 6,
      amount: 300000,
      date: '2 days ago · 10:15',
      label: 'Client Transfer',
      icon: person,
      isAddition: true,
    },
    {
      id: 7,
      amount: 175000,
      date: '3 days ago · 16:45',
      label: 'Online Shopping',
      icon: person,
      isSubtraction: true,
    },
    {
      id: 8,
      amount: 950000,
      date: '3 days ago · 09:00',
      label: 'Investment Return',
      icon: person,
      isAddition: true,
    },
    {
      id: 9,
      amount: 65000,
      date: '4 days ago · 13:20',
      label: 'Taxi Ride',
      icon: person,
      isSubtraction: true,
    },
    {
      id: 10,
      amount: 425000,
      date: '4 days ago · 08:30',
      label: 'Consulting Fee',
      icon: person,
      isAddition: true,
    },
  ];

  return (
    <View className="mb-12">
      <Text className="text-[#121212] text-center text-2xl font-bold">
        Latest Transactions
      </Text>
      <View className="pt-6">
        <FlatList
          data={transactions}
          renderItem={({item}) => (
            <TransactionCards
              amount={item.amount}
              date={item.date}
              label={item.label}
              icon={item.icon}
              isSubtraction={item.isSubtraction}
              isAddition={item.isAddition}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
}
