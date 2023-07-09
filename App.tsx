/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {Home, My} from './src/pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import {HomeIcon, MyIcon, iconType} from './src/icons';

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

const tabHomeIcon = ({size, color}: iconType) => (
  <HomeIcon size={size} color={color} />
);

const tabMyIcon = ({color, size}: iconType) => (
  <MyIcon size={size} color={color} />
);

const App = () => {
  return (
    <NativeBaseProvider config={config}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              title: 'WordCHips',
              tabBarLabel: '学习',
              tabBarIcon: tabHomeIcon,
            }}
          />
          <Tab.Screen
            name="Login"
            component={My}
            options={{
              title: '我的',
              tabBarIcon: tabMyIcon,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
