import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

export default function ScrollSendAgain() {
  const items = [
    {id: 1, title: 'Item 1', amount: '$100'},
    {id: 2, title: 'Item 2', amount: '$200'},
    {id: 3, title: 'Item 3', amount: '$300'},
    {id: 4, title: 'Item 4', amount: '$400'},
    {id: 5, title: 'Item 5', amount: '$500'},
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="px-4">
      {items.map(item => (
        <TouchableOpacity
          key={item.id}
          className="bg-white mr-4 rounded-xl p-4 shadow-sm w-40">
          <View className="space-y-2">
            <Text className="text-purple-600 font-bold text-lg">
              {item.title}
            </Text>
            <Text className="text-gray-600 text-base">{item.amount}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
