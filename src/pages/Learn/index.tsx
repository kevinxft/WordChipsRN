import {FinishedScreen} from './FinishedScreen';
import {PreviewScreen} from './PreviewScreen';
import {SentenceMakingScreen} from './SentenceMakingScreen';
import {ReadingScreen} from './ReadingScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const LearnStack = createNativeStackNavigator();

const config = {
  headerBackVisible: false,
  headerBackButtonMenuEnabled: false,
  headerBackTitleVisible: false,
};

export const LearnScreens = () => (
  <LearnStack.Navigator initialRouteName="SentenceMaking">
    <LearnStack.Screen
      name="Preview"
      component={PreviewScreen}
      options={{
        ...config,
        title: '预习单词',
      }}
    />
    <LearnStack.Screen
      name="SentenceMaking"
      component={SentenceMakingScreen}
      options={{
        ...config,
        title: '单词造句',
      }}
    />
    <LearnStack.Screen
      name="Reading"
      component={ReadingScreen}
      options={{
        ...config,
        title: '小作文',
      }}
    />
    <LearnStack.Screen
      name="Finished"
      component={FinishedScreen}
      options={{
        ...config,
        title: '完成挑战',
      }}
    />
  </LearnStack.Navigator>
);
