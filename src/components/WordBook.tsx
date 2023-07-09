import React from 'react';
import {Text, Box} from 'native-base';

export interface WordBookType {
  id: number;
  name: string;
  count: number;
  learned?: number;
}

export const WordBook = (props: WordBookType) => (
  <Box bg="violet.800" width="90%" mt="4" p="4" rounded="xl">
    <Text textAlign="center" fontSize="xl" color="warmGray.50">
      {props.name}
    </Text>
    <Box flexDirection="row" justifyContent="space-between" mt="4">
      <Text color="warmGray.50">单词：{props.count}</Text>
      <Text color="warmGray.50">已学：{props.learned}</Text>
    </Box>
  </Box>
);
