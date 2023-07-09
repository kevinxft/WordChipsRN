import {NativeBaseProvider, Box, Fab, Text} from 'native-base';
import React, {useState, useEffect} from 'react';
import {WordBookType, WordBook} from '../components/WordBook';

const NoWordBook: React.FC = () => {
  return (
    <Text fontSize="md">你还没有自己的单词本哦，点击右下角按钮去添加</Text>
  );
};

const Loading: React.FC = () => {
  return <Text fontSize="xl">努力加载中...</Text>;
};

export const Home = () => {
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
      <Box flex={1} bg="cyan.100" alignItems="center" justifyContent="center">
        {loading ? (
          <Loading />
        ) : wordBooks.length === 0 ? (
          <NoWordBook />
        ) : (
          wordBooks.map(item => <WordBook key={item.id} {...item} />)
        )}
      </Box>

      {!loading && (
        <Fab
          bg="violet.600"
          renderInPortal={false}
          shadow={2}
          placement="bottom-right"
          size="sm"
          label="添加单词本"
        />
      )}
    </NativeBaseProvider>
  );
};
