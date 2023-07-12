import {Box, Text, Flex, Pressable, Button, Icon} from 'native-base';
import VIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {useBackHandler} from '@react-native-community/hooks';
import {useStore} from '../../store';
import {create} from 'zustand';

const initState = {
  currentWords: [],
  selectedWords: [],
};

const limit = 5;

type State = {
  currentWords: any[];
  selectedWords: string[];
};

type Actions = {
  setSelectedWords: (index: string[]) => void;
};

const useScreenStore = create<State & Actions>(set => ({
  ...initState,
  setSelectedWords: selectedWords => {
    set({selectedWords});
  },
}));

const getRobotIcon = (selected: number) => {
  switch (selected) {
    case 0:
      return 'robot-confused';
    case 1:
      return 'robot-angry';
    case 2:
      return 'robot';
    case 3:
      return 'robot-excited';
    case 4:
      return 'robot-happy';
    case 5:
      return 'robot-love';
    default:
      return 'robot-dead';
  }
};

function shuffleArray(array: any[]): any[] {
  const length = array.length;

  for (let i = length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array;
}

export const SentenceMakingScreen: React.FC = () => {
  useBackHandler(() => {
    console.log('阻止返回');
    return true;
  });

  const {learningWords, updateLearningWords} = useStore();
  const {selectedWords, setSelectedWords} = useScreenStore();

  let noMadeWords = learningWords.filter(item => !item.isMade);

  const currentWords = noMadeWords.slice(0, limit);

  const tagWordToMade = () => {
    const newLearningWords = learningWords.map(word => {
      return {
        ...word,
        isMade: word.isMade || selectedWords.includes(word.name),
      };
    });
    updateLearningWords(shuffleArray(newLearningWords));
  };

  const onMakeSentence = () => {
    tagWordToMade();
    resetSelected();
  };

  const toggleSelected = (word: string) => {
    if (selectedWords.includes(word)) {
      const newWords = selectedWords.filter(item => item !== word);
      setSelectedWords(newWords);
    } else {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const selectAll = () => {
    const selected = currentWords.map(word => word.name);
    setSelectedWords(selected);
  };

  const resetSelected = () => {
    setSelectedWords([]);
  };

  const robotIcon = getRobotIcon(selectedWords.length);
  const isSelectedAll = selectedWords.length === limit;
  const isNotSelected = selectedWords.length === 0;

  return (
    <Flex
      flexDirection="column"
      pb="20"
      alignItems="center"
      flex={1}
      bg="white">
      <Text mt="10">选择至少一个单词进行AI造句，帮助你加深印象</Text>
      <Box flex="1" w="90%">
        {currentWords.map(word => {
          return (
            <Pressable
              key={word.name}
              onPress={() => toggleSelected(word.name)}>
              <Box
                borderWidth={2}
                borderColor={
                  selectedWords.includes(word.name) ? 'light.900' : 'light.300'
                }
                mt="6"
                pt="3"
                pb="3"
                rounded="sm"
                colorScheme="light"
                bg="light.100"
                w="100%"
                alignItems="center"
                textAlign="center"
                key={word.name}>
                <Text>{word.name}</Text>
              </Box>
            </Pressable>
          );
        })}

        {currentWords.length > 1 && (
          <Button
            onPress={isSelectedAll ? resetSelected : selectAll}
            variant="outline"
            borderWidth={2}
            mt="6"
            pt="3"
            pb="3"
            colorScheme="light"
            w="100%">
            {isSelectedAll ? '取消全选' : '全选'}
          </Button>
        )}
      </Box>

      <Button
        onPress={onMakeSentence}
        colorScheme="light"
        bg="light.900"
        w="65%"
        isDisabled={isNotSelected}
        endIcon={<Icon as={VIcon} name={robotIcon} size="3xl" />}>
        <Text fontSize="xl" color="white">
          开始 AI 造句
        </Text>
      </Button>
    </Flex>
  );
};
