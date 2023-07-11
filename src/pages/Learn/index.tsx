import {FinishedScreen} from './FinishedScreen';
import {PreviewScreen} from './PreviewScreen';
import {SentenceMakingScreen} from './SentenceMakingScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const LearnStack = createNativeStackNavigator();
export const LearnScreens = () => (
  <LearnStack.Navigator>
    <LearnStack.Screen
      name="Preview"
      component={PreviewScreen}
      options={{
        title: '预习单词',
      }}
    />
    <LearnStack.Screen
      name="SentenceMaking"
      component={SentenceMakingScreen}
      options={{
        title: '单词造句',
      }}
    />
    <LearnStack.Screen
      name="Finished"
      component={FinishedScreen}
      options={{
        title: '完成挑战',
      }}
    />
  </LearnStack.Navigator>
);
