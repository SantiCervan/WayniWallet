import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

interface ItemsProps {
  id: string | number;
  image: any;
  label: string;
}

export default function ScrollSendAgain() {
  const items: ItemsProps[] = [
    {id: 1, image: require('../assets/icons/home.png'), label: 'person'},
    {id: 2, image: require('../assets/icons/home.png'), label: 'person'},
    {id: 3, image: require('../assets/icons/home.png'), label: 'person'},
    {id: 4, image: require('../assets/icons/home.png'), label: 'person'},
    {id: 5, image: require('../assets/icons/home.png'), label: 'person'},
    {id: 6, image: require('../assets/icons/home.png'), label: 'person'},
    {id: 7, image: require('../assets/icons/home.png'), label: 'person'},
    {id: 8, image: require('../assets/icons/home.png'), label: 'person'},
    {id: 9, image: require('../assets/icons/home.png'), label: 'person'},
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{gap: 12}}
      className="pt-4">
      {items.map(item => (
        <TouchableOpacity
          key={item.id}
          className="rounded-xl w-20 h-24 items-center justify-center ">
          <Image
            source={item.image}
            style={{width: 65, height: 65}}
            resizeMode="contain"
          />
          <Text className="text-gray-600 text-center text-base">
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
