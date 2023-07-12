import React from 'react';
import {Box} from 'native-base';
import {useBackHandler} from '@react-native-community/hooks';

export const FinishedScreen: React.FC = () => {
  useBackHandler(() => {
    console.log('阻止返回');
    return true;
  });
  return <Box>FinishedScreen</Box>;
};
