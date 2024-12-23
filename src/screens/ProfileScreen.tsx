import React from 'react';
import {Text} from 'react-native';
import HeaderContainer from '../components/HeaderContainer';

const ProfileScreen = () => {
  return (
    <HeaderContainer action="home" label="Profile">
      <Text>profile</Text>
    </HeaderContainer>
  );
};

export default ProfileScreen;
