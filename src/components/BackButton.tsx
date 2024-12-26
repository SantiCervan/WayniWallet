import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import arrowLeft from '../assets/icons/arrowLeft.png';
import {Routes} from '../utils/constants';
import {NavigationProp} from '../types/routes';

type NavigationButtonProps = {
  action: 'Back' | 'HomeScreen';
};

const NavigationButton = ({action}: NavigationButtonProps) => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    if (action === 'Back') {
      navigation.goBack();
    } else {
      navigation.navigate(Routes.HOME);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Image source={arrowLeft} className="w-8 h-8" />
    </TouchableOpacity>
  );
};

export default NavigationButton;
