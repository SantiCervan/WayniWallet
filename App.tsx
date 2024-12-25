import React from 'react';
import './global.css';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './src/components/Tabs';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <StatusBar backgroundColor="#0FD08B" barStyle="light-content" />
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="HomeTabs"
                component={Tabs}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default App;
