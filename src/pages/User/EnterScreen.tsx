import React from 'react';
import {Button, Center, Text, Icon, Box} from 'native-base';
import VIcon from 'react-native-vector-icons/Feather';
import {useStore, WorkBookType} from '../../store';

const WordBook = ({
  id,
  name,
  count,
  learned,
  toLearn,
}: WorkBookType & {toLearn: (id: number) => void}) => (
  <Box w="80%" rounded="lg" bg="white" p="4" shadow={2}>
    <Text mb="2">{name}</Text>
    <Text mb="2">单词数量：{count}</Text>
    <Text mb="4">已学数量：{learned}</Text>
    <Button colorScheme="light" bg="light.900" onPress={() => toLearn(id)}>
      现在去学习
    </Button>
  </Box>
);

const NoWordBooks = ({toPage}: {toPage: () => void}) => (
  <Center rounded="lg" bg="white" w="80%" pt="10" pb="10" shadow={2}>
    <Icon name="frown" mb="4" size="2xl" color="light.900" as={VIcon} />
    <Text fontSize="md" fontWeight="bold">
      你还没有自己的单词本!
    </Text>
    <Button
      colorScheme="light"
      w="80%"
      bg="light.900"
      mt={4}
      onPress={toPage}
      rightIcon={<Icon name="book" color="light.50" as={VIcon} />}>
      去挑选
    </Button>
  </Center>
);

export const EnterScreen: React.FC = ({navigation}) => {
  const {loading, isLearning, wordBooks, toggleLearning} = useStore();
  const toBooks = () => {
    navigation.navigate('Books');
  };
  const toLearn = id => {
    console.log(id);
    toggleLearning(true);
  };
  return (
    <Center h="100%">
      {loading ? (
        <Text>加載中...</Text>
      ) : wordBooks.length ? (
        wordBooks.map(book => (
          <WordBook toLearn={toLearn} key={book.id} {...book} />
        ))
      ) : (
        <NoWordBooks toPage={toBooks} />
      )}
    </Center>
  );
};
