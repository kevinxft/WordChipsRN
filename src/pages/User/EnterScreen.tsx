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
  <Box>
    <Text>{name}</Text>
    <Text>单行数量：{count}</Text>
    <Text>巩困数量：{learned}</Text>
    <Button onPress={() => toLearn(id)}>现在去学习</Button>
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
