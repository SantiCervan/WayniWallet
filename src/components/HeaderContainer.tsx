import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';
import BackButton from './BackButton';
import {useNavigation} from '@react-navigation/native';
import {useUserStore} from '../store/useUserStore';
import {useBalanceStore} from '../store/useBalanceStore';
import {Routes} from '../utils/constants';
import {NavigationProp} from '../types/routes';

type HeaderContainerProps = {
  action: 'Back' | 'HomeScreen';
  label: string;
  children?: ReactNode;
  showBalance?: boolean;
  showProfile?: boolean;
  showBackButton?: boolean;
};

export default function HeaderContainer({
  action,
  label,
  children,
  showBalance,
  showProfile,
  showBackButton,
}: HeaderContainerProps) {
  const user = useUserStore(state => state.user);
  const balance = useBalanceStore(state => state.balance);
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate(Routes.PROFILE);
  };

  return (
    <View className="bg-primaryGreen items-center flex-1">
      <View className={`${showBalance ? 'h-1/4' : 'py-6'} w-full px-3`}>
        {showProfile && (
          <>
            {!user ? (
              <View className="flex-row items-center py-4 pl-3 gap-4">
                <View className="w-8 h-8 rounded-full bg-gray-300 animate-pulse" />
                <View className="w-24 h-4 bg-gray-300 rounded animate-pulse" />
              </View>
            ) : (
              <TouchableOpacity
                className="flex-row items-center py-4 pl-3 gap-2"
                onPress={handlePress}>
                <Image
                  source={{uri: user.picture.medium}}
                  style={styles.Image}
                  resizeMode="contain"
                />
                <Text className="text-white font-bold text-[15px]">
                  {`${user.name.first} ${user.name.last}`}
                </Text>
              </TouchableOpacity>
            )}
          </>
        )}
        {showBackButton && (
          <View
            className={` ${
              showBalance && 'py-4'
            } flex-row items-start justify-between`}>
            <View className="flex-1">
              <BackButton action={action} />
            </View>
            <Text className="text-white text-2xl font-bold flex-1 text-center">
              {label}
            </Text>
            <View className="flex-1" />
          </View>
        )}
        {showBalance && (
          <View className="w-full pt-6">
            <Text className="text-white text-center text-[16px]">
              Your Balance
            </Text>
            <Text className="text-white text-center font-bold text-[32px]">
              $ {balance.toLocaleString()}
            </Text>
          </View>
        )}
      </View>
      <View className="bg-white w-full h-full rounded-t-[3rem]">
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Image: {width: 32, height: 32, borderRadius: 16},
});
