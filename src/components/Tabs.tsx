import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TransfersScreen from '../screens/TransfersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SendAgainScreen from '../screens/SendAgainScreen';
import SuccessScreen from '../screens/SuccessScreen';

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
              iconSource = require('../assets/icons/home.png');
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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Transfers" component={TransfersScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const Tabs = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={TabNavigator} />
      <Stack.Screen name="SendAgain" component={SendAgainScreen} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
    </Stack.Navigator>
  );
};

export default Tabs;
