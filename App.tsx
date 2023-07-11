/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {
  EnterScreen,
  BooksScreen,
  MyScreen,
  LoginScreen,
  RegisterScreen,
  Example,
} from './src/pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VIcon from 'react-native-vector-icons/Ionicons';
import {useStore} from './src/store';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

type TabIconType = {
  size: number;
  color: string;
  focused: boolean;
};

type TabIconName = {
  activeName: string;
  inactiveName: string;
};

const tabBarIcon = ({activeName, inactiveName}: TabIconName) => {
  return ({size, color, focused}: TabIconType) =>
    focused ? (
      <VIcon name={activeName} size={size} color={color} />
    ) : (
      <VIcon name={inactiveName} size={size} color={color} />
    );
};

const EnterStack = () => (
  <HomeStack.Navigator initialRouteName="Enter">
    <HomeStack.Screen
      name="Enter"
      component={EnterScreen}
      options={{
        title: '学习',
      }}
    />
    <HomeStack.Screen
      name="Books"
      component={BooksScreen}
      options={{
        title: '单词本',
      }}
    />
  </HomeStack.Navigator>
);

const UserTab = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#1c1917',
      inactiveTintColor: '#78716c',
    }}>
    <Tab.Screen
      name="Home"
      component={EnterStack}
      options={{
        title: '学习',
        tabBarLabel: '学习',
        tabBarIcon: tabBarIcon({
          activeName: 'book',
          inactiveName: 'book-outline',
        }),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="My"
      component={MyScreen}
      options={{
        title: '我的',
        tabBarIcon: tabBarIcon({
          activeName: 'happy',
          inactiveName: 'happy-outline',
        }),
      }}
    />
  </Tab.Navigator>
);

const App = () => {
  const {isLogined, isLearning} = useStore();
  return (
    <NativeBaseProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {isLogined ? (
            isLearning ? (
              <Stack.Group>
                <Stack.Screen name="Example" component={Example} />
              </Stack.Group>
            ) : (
              <Stack.Screen name="User" component={UserTab} />
            )
          ) : (
            <Stack.Group>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
