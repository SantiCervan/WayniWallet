import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TransfersScreen from '../screens/TransfersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SendAgainScreen from '../screens/SendAgainScreen';
import SuccessScreen from '../screens/SuccessScreen';
import {Routes} from '../utils/constants';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          display: route.name === 'Home' ? 'flex' : 'none',
          paddingHorizontal: 20,
          paddingTop: 9,
          height: 75,
        },
        tabBarLabelStyle: {
          paddingTop: 5,
          fontSize: 14,
        },
        tabBarIcon: () => {
          let iconSource;

          switch (route.name) {
            case 'Home':
              iconSource = require('../assets/icons/transactions.png');
              break;
            case 'Transfers':
              iconSource = require('../assets/icons/transfers.png');
              break;
            case 'Profile':
              iconSource = require('../assets/icons/profile.png');
              break;
          }

          return (
            <Image
              source={iconSource}
              style={{width: 32, height: 32}}
              resizeMode="contain"
            />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name={Routes.HOME} component={HomeScreen} />
      <Tab.Screen name={Routes.TRANSFERS} component={TransfersScreen} />
      <Tab.Screen name={Routes.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const Tabs = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.HOME_SCREEN} component={TabNavigator} />
      <Stack.Screen name={Routes.SEND_AGAIN} component={SendAgainScreen} />
      <Stack.Screen name={Routes.SUCCESS_SCREEN} component={SuccessScreen} />
    </Stack.Navigator>
  );
};

export default Tabs;
