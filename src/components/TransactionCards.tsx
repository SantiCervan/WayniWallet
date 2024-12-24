import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

interface TransactionCardsProps {
  icon?: any;
  img?: any;
  date: string;
  label: string;
  amount: number;
  isSubtraction?: boolean;
  isAddition?: boolean;
}
export default function TransactionCards({
  icon,
  img,
  date,
  label,
  amount,
  isSubtraction,
  isAddition,
}: TransactionCardsProps) {
  return (
    <TouchableOpacity className="h-20 flex-row items-center justify-between pr-3">
      <View className="bg-[#F9F5FE] h-14 w-14 rounded-full items-center justify-center">
        {icon ? (
          <Image
            source={icon}
            style={{width: 28, height: 28}}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={img}
            style={{width: 50, height: 50}}
            resizeMode="contain"
          />
        )}
      </View>
      <View className="ml-3 flex-1">
        <Text className="text-lg">{label}</Text>
        <Text className="text-[#999] text-sm">{date}</Text>
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
