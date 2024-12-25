import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import HeaderContainer from '../components/HeaderContainer';
import person from '../assets/images/person.png';
import ProfileCardInfo from '../components/ProfileCardInfo';

const ProfileScreen = () => {
  const profileData = [
    {
      id: 1,
      data: 'City',
      info: 'New York',
    },
    {
      id: 2,
      data: 'State',
      info: 'NY',
    },
    {
      id: 3,
      data: 'Street',
      info: '5th Avenue 2345',
    },
    {
      id: 4,
      data: 'Email',
      info: 'juan.perez@gmail.com',
    },
    {
      id: 5,
      data: 'Phone',
      info: '+1 (555) 123-4567',
    },
  ];

  return (
    <HeaderContainer action="Home" label="Profile" showBackButton>
      <View className="pt-12 w-full items-center">
        <Image
          source={person}
          style={{width: 220, height: 220}}
          resizeMode="contain"
        />
        <Text className="text-center pt-4 text-3xl font-bold">Juan Perez</Text>
      </View>
      <ScrollView className="px-5 pt-14">
        {profileData.map(item => (
          <ProfileCardInfo key={item.id} data={item.data} info={item.info} />
        ))}
      </ScrollView>
      <View className="flex-row justify-between items-center mb-12 h-28 px-5 ">
        <Text className="text-[#999]">ID</Text>
        <Text className="text-[#999] text-right">
          7a0eed16-9430-4d68-901f-c0d4c1c3bf00
        </Text>
      </View>
    </HeaderContainer>
  );
};

export default ProfileScreen;
