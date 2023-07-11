import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VIcon from 'react-native-vector-icons/Ionicons';
import {EnterScreen} from './EnterScreen';
import {BooksScreen} from './BooksScreen';
import {MyScreen} from './MyScreen';

const Tab = createBottomTabNavigator();
const EnterStack = createNativeStackNavigator();

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

const EnterScreens = () => (
  <EnterStack.Navigator initialRouteName="Enter">
    <EnterStack.Screen
      name="Enter"
      component={EnterScreen}
      options={{
        title: '学习',
      }}
    />
    <EnterStack.Screen
      name="Books"
      component={BooksScreen}
      options={{
        title: '单词本',
      }}
    />
  </EnterStack.Navigator>
);

export const UserScreens = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#1c1917',
      inactiveTintColor: '#78716c',
    }}>
    <Tab.Screen
      name="Home"
      component={EnterScreens}
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
