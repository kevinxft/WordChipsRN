/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {KeyboardAvoidingView, NativeBaseProvider} from 'native-base';
import {HomeScreen, MyScreen, LoginScreen, Example} from './src/pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeIcon, MyIcon, iconType} from './src/icons';
import {Platform} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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

const NoLoginStack = () => {
  return <LoginScreen />;
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Example" component={Example} />
    </Stack.Navigator>
  );
};

const TabStack = () => (
  <Tab.Navigator initialRouteName="Login">
    <Tab.Screen
      name="Login"
      component={HomeStack}
      options={{
        title: '学习',
        tabBarLabel: '学习',
        tabBarIcon: tabHomeIcon,
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="My"
      component={MyScreen}
      options={{
        title: '我的',
        tabBarIcon: tabMyIcon,
      }}
    />
  </Tab.Navigator>
);

const App = () => {
  const [isLogin, setLogin] = useState(false);
  setTimeout(() => {
    setLogin(false);
  }, 2000);
  return (
    <NativeBaseProvider config={config}>
      <NavigationContainer>
        {isLogin ? <TabStack /> : <NoLoginStack />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
