import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import arrowLeft from '../assets/icons/arrowLeft.png';

type NavigationButtonProps = {
  action: 'Back' | 'Home';
};

const NavigationButton = ({action}: NavigationButtonProps) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (action === 'Back') {
      navigation.goBack();
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Image source={arrowLeft} className="w-8 h-8" />
    </TouchableOpacity>
  );
};

export default NavigationButton;
