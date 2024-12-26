import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import transactionIcon from '../assets/icons/transactions.png';
import {useRoute} from '@react-navigation/native';

interface TransactionCardsProps {
  amount: number;
  date: string;
  time: string;
  label: string;
  picture?: {
    medium: string;
  };
  icon?: any;
  isSubtraction?: boolean;
  isAddition?: boolean;
}
export default function TransactionCards({
  picture,
  icon,
  date,
  time,
  label,
  amount,
  isSubtraction,
  isAddition,
}: TransactionCardsProps) {
  const route = useRoute();
  return (
    <TouchableOpacity className="h-20 flex-row items-center justify-between pr-3">
      <View className="bg-backgroundGray h-14 w-14 rounded-full items-center justify-center">
        {picture && route.name === 'Transfers' ? (
          <Image
            source={{uri: picture.medium}}
            style={{width: 50, height: 50}}
            resizeMode="contain"
            className="rounded-full"
          />
        ) : (
          <Image
            source={icon || transactionIcon}
            style={{width: 28, height: 28}}
            resizeMode="contain"
          />
        )}
      </View>
      <View className="ml-3 flex-1">
        <Text className="text-lg">{label}</Text>
        <Text className="text-[#999] text-sm">
          {date} · {time}
        </Text>
      </View>
      <View>
        <Text
          className={`font-bold text-base ${isSubtraction && 'text-red-500'} ${
            isAddition && 'text-green-500'
          }`}>
          {isSubtraction && '-'}
          {isAddition && '+'}$ {amount.toLocaleString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
