import {Text} from 'native-base';
import React from 'react';
import {useBackHandler} from '@react-native-community/hooks';

export const ReadingScreen: React.FC = () => {
  useBackHandler(() => {
    console.log('阻止返回');
    return true;
  });
  return <Text>Reading Screen</Text>;
};
