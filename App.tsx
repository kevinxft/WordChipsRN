import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {UserScreens} from './src/pages/User';
import {LoginScreen, RegisterScreen} from './src/pages/Login';
import {LearnScreens} from './src/pages/Learn';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useStore} from './src/store';

const Stack = createNativeStackNavigator();

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

const App = () => {
  const {isLogined, isLearning} = useStore();
  return (
    <NativeBaseProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {isLogined ? (
            isLearning ? (
              <Stack.Screen name="Learn" component={LearnScreens} />
            ) : (
              <Stack.Screen name="User" component={UserScreens} />
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
