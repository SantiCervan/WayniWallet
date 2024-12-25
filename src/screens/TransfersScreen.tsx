import React from 'react';
import {Image, Text, View} from 'react-native';
import HeaderContainer from '../components/HeaderContainer';
import calendar from '../assets/icons/calendar.png';
import LatestTransactions from '../components/LatestTransactions';
import person from '../assets/images/person.png';

const TransfersScreen = () => {
  const peopleTransactions = [
    {
      id: 1,
      amount: 450000,
      date: 'Today · 10:00',
      label: 'Emma Thompson',
      img: person,
    },
    {
      id: 2,
      amount: 750000,
      date: 'Today · 09:30',
      label: 'James Wilson',
      img: person,
    },
    {
      id: 3,
      amount: 120000,
      date: 'Yesterday · 15:20',
      label: 'Sofia Rodriguez',
      img: person,
    },
    {
      id: 4,
      amount: 250000,
      date: 'Yesterday · 14:00',
      label: 'Lucas Chen',
      img: person,
    },
    {
      id: 5,
      amount: 85000,
      date: '2 days ago · 11:30',
      label: 'Isabella Kim',
      img: person,
    },
    {
      id: 6,
      amount: 300000,
      date: '2 days ago · 10:15',
      label: 'Oliver Singh',
      img: person,
    },
    {
      id: 7,
      amount: 175000,
      date: '3 days ago · 16:45',
      label: 'Mia Patel',
      img: person,
    },
    {
      id: 8,
      amount: 950000,
      date: '3 days ago · 09:00',
      label: 'Ethan Brown',
      img: person,
    },
    {
      id: 9,
      amount: 65000,
      date: '4 days ago · 13:20',
      label: 'Ava Martinez',
      img: person,
    },
    {
      id: 10,
      amount: 425000,
      date: '4 days ago · 08:30',
      label: 'Noah Garcia',
      img: person,
    },
    {
      id: 11,
      amount: 425000,
      date: '4 days ago · 08:30',
      label: 'Noah Garcia',
      img: person,
    },
    {
      id: 12,
      amount: 425000,
      date: '4 days ago · 08:30',
      label: 'Noah Garcia',
      img: person,
    },
    {
      id: 13,
      amount: 425000,
      date: '4 days ago · 08:30',
      label: 'Noah Garcia',
      img: person,
    },
    {
      id: 14,
      amount: 425000,
      date: '4 days ago · 08:30',
      label: 'Noah Garcia',
      img: person,
    },
    {
      id: 15,
      amount: 425000,
      date: '4 days ago · 08:30',
      label: 'Noah Garcia',
      img: person,
    },
    {
      id: 16,
      amount: 425000,
      date: '4 days ago · 08:30',
      label: 'Noah Garcia',
      img: person,
    },
  ];

  return (
    <HeaderContainer action="Back" label="Transfers" showBackButton>
      <View className="pl-5 pr-11 py-8 flex-row w-full  rounded-t-[3rem] items-center justify-between">
        <Text className="text-xl font-bold">Latest Transfer</Text>
        <Image source={calendar} style={{width: 25, height: 25}} />
      </View>
      <View className="px-5 ">
        <LatestTransactions data={peopleTransactions} />
      </View>
    </HeaderContainer>
  );
};

export default TransfersScreen;
