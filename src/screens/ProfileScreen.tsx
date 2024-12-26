import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import HeaderContainer from '../components/HeaderContainer';
import ProfileCardInfo from '../components/ProfileCardInfo';
import {useUserStore} from '../store/useUserStore';

const ProfileScreen = () => {
  const user = useUserStore(state => state.user);

  const profileData = [
    {
      id: 1,
      data: 'City',
      info: user?.location.city || '',
    },
    {
      id: 2,
      data: 'State',
      info: user?.location.state || '',
    },
    {
      id: 3,
      data: 'Street',
      info:
        `${user?.location.street.name} ${user?.location.street.number}` || '',
    },
    {
      id: 4,
      data: 'Email',
      info: user?.email || '',
    },
    {
      id: 5,
      data: 'Phone',
      info: user?.phone || '',
    },
  ];

  return (
    <HeaderContainer action="Back" label="Profile" showBackButton>
      <View className="pt-12 w-full items-center">
        <Image
          source={{uri: user?.picture.large}}
          style={styles.Image}
          resizeMode="contain"
        />
        <Text className="text-center pt-4 text-3xl font-bold">
          {`${user?.name.first} ${user?.name.last}`}
        </Text>
      </View>
      <ScrollView className="px-5 pt-14">
        {profileData.map(item => (
          <ProfileCardInfo key={item.id} data={item.data} info={item.info} />
        ))}
      </ScrollView>
      <View className="flex-row justify-between items-center mb-12 h-28 px-5 ">
        <Text className="text-[#999]">ID</Text>
        <Text className="text-[#999] text-right">{user?.login.uuid}</Text>
      </View>
    </HeaderContainer>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  Image: {width: 220, height: 220, borderRadius: 110},
});
