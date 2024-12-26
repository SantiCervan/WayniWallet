import {FlatList} from 'react-native';
import React from 'react';
import TransactionCards from './TransactionCards';
import {Transaction} from '../store/useTransactionsStore';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
import {Routes} from '../utils/constants';

interface LatestTransactionsProps {
  data: Transaction[];
}

export default function LatestTransactions({data}: LatestTransactionsProps) {
  const route = useRoute();

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <FlatList
          data={data}
          className={`px-5 ${route.name === Routes.HOME ? 'mb-36' : 'mb-8'}`}
          renderItem={({item}) => (
            <TransactionCards
              amount={item.amount}
              date={item.date}
              time={item.time}
              label={item.label}
              picture={item.picture}
              icon={item.icon}
              isSubtraction={item.isSubtraction}
              isAddition={item.isAddition}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
