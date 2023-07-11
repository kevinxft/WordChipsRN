import React from 'react';
import {Button} from 'native-base';
import {useStore} from '../store';
import {useBackHandler} from '@react-native-community/hooks';

export const Example = () => {
  useBackHandler(() => {
    console.log('阻止默认行为');
    return true;
  });
  const toggleLearning = useStore(state => state.toggleLearning);
  const toLearning = () => {
    console.log('去学会');
    toggleLearning(false);
  };
  return <Button onPress={toLearning}>不学习了</Button>;
};
