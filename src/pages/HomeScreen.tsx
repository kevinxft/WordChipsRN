import {NativeBaseProvider, Box, Text} from 'native-base';
import React, {useState, useEffect} from 'react';
import {WordBookType, WordBook} from '../components/WordBook';

export const HomeScreen: React.FC = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [wordBooks, setWordBooks] = useState<WordBookType[]>([]);

  const getWordBooks = async () => {
    // setWordBooks(fakerData);
    setWordBooks([]);
  };

  useEffect(() => {
    setTimeout(() => {
      getWordBooks();
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <NativeBaseProvider>
      <Box flex={1} alignItems="center" justifyContent="center">
        {loading ? (
          <Text fontSize="xl">努力加载中...</Text>
        ) : wordBooks.length === 0 ? (
          <Text
            fontSize="md"
            onPress={() => {
              console.log('press');
              navigation.navigate('Login');
            }}>
            你还没有自己的单词本哦，点击右下角按钮去添加
          </Text>
        ) : (
          wordBooks.map(item => <WordBook key={item.id} {...item} />)
        )}
      </Box>
    </NativeBaseProvider>
  );
};
