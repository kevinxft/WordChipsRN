import React from 'react';
import {Flex, Box, Button, Text, Progress, Icon} from 'native-base';
import VIcon from 'react-native-vector-icons/FontAwesome5';
import {create} from 'zustand';
import {useStore} from '../../store';

type State = {
  showNext: boolean;
  index: number;
};

type Actions = {
  setShowNext: (showNext: boolean) => void;
  setIndex: (index: number) => void;
};

const useScreeenStore = create<State & Actions>(set => ({
  index: 0,
  showNext: false,
  setShowNext: showNext => set({showNext}),
  setIndex: index => set({index}),
}));

export const PreviewScreen: React.FC = ({navigation}) => {
  const {showNext, setShowNext, setIndex, index} = useScreeenStore();
  const {learningWords} = useStore();

  const onNext = () => {
    if (index < learningWords.length - 1) {
      setIndex(index + 1);
      setShowNext(false);
      return;
    }
    navigation.navigate('SentenceMaking');
  };
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      pb="8"
      h="100%"
      w="100%"
      bg="white">
      <Box
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        mt="4"
        w="100%">
        <Box w="80%">
          <Progress
            value={Math.floor((index / learningWords.length) * 100)}
            colorScheme="light"
          />
        </Box>
        <Text ml="4">
          {index}/{learningWords.length}
        </Text>
      </Box>
      <Box mt="40" flex="1" w="80%">
        <Text textAlign="center" fontSize="2xl">
          {learningWords[index].name}
        </Text>
        <Text mt="4" textAlign="center" fontSize="md">
          {learningWords[index].sound}
        </Text>
        <Text textAlign="center" mt="10" fontSize="xl">
          {learningWords[index].desc}
        </Text>
      </Box>
      {showNext ? (
        <Button colorScheme="light" bg="light.900" w="85%" onPress={onNext}>
          下一个
        </Button>
      ) : (
        <Box w="100%" mt="10" justifyContent="space-evenly" flexDirection="row">
          <Button
            colorScheme="light"
            variant="outline"
            w="40%"
            onPress={() => setShowNext(true)}
            leftIcon={
              <Icon as={VIcon} name="sad-cry" size="md" color="light.700" />
            }>
            不会
          </Button>
          <Button
            bg="light.900"
            colorScheme="light"
            w="40%"
            onPress={() => setShowNext(true)}
            leftIcon={
              <Icon as={VIcon} name="laugh-beam" size="md" color="light.300" />
            }>
            我会
          </Button>
        </Box>
      )}
      <Button
        mt="4"
        variant="link"
        colorScheme="light"
        leftIcon={<Icon as={VIcon} name="trash-alt" size="sm" />}>
        从单词本中删除
      </Button>
    </Flex>
  );
};
