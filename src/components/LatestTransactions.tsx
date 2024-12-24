import {View, FlatList} from 'react-native';
import React from 'react';
import TransactionCards from './TransactionCards';

interface TransactionItem {
  id: number;
  icon?: any;
  img?: any;
  date: string;
  label: string;
  amount: number;
  isSubtraction?: boolean;
  isAddition?: boolean;
}

interface LatestTransactionsProps {
  data: TransactionItem[];
}
export default function LatestTransactions({data}: LatestTransactionsProps) {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <TransactionCards
          amount={item.amount}
          date={item.date}
          label={item.label}
          icon={item.icon}
          img={item.img}
          isSubtraction={item.isSubtraction}
          isAddition={item.isAddition}
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
}
