import React from 'react';
import {create} from 'zustand';
import {Box, Button, Flex, Text, AlertDialog, Icon} from 'native-base';
import VIcon from 'react-native-vector-icons/FontAwesome5';

type State = {
  books: any[];
  show: boolean;
  loading: boolean;
  bookId: number | null;
};

type Actions = {
  setShow: (show: boolean) => void;
  setBooks: (books: any[]) => void;
  setLoading: (loading: boolean) => void;
};

const useStore = create<State & Actions>(set => ({
  books: [],
  show: false,
  loading: false,
  bookId: null,
  setShow: show => set({show}),
  setBooks: books => set({books}),
  setLoading: loading => set({loading}),
}));

const BookBox = () => {
  const flag = true;
  const {setShow} = useStore();
  return (
    <Box shadow={1} rounded="lg" bg="white" w="95%" p={4} mt={4}>
      <Box
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
        mb={4}>
        <Text bold fontSize="xl" color="light.900">
          常用词语3000
        </Text>
        <Text>单词量：3000</Text>
      </Box>
      <Text mb="4">收录常用的英语单词</Text>
      {flag ? (
        <Button
          colorScheme="light"
          bg="light.900"
          onPress={() => setShow(true)}>
          导入
        </Button>
      ) : (
        <Button variant="subtle" isDisabled colorScheme="light">
          已经在学
        </Button>
      )}
    </Box>
  );
};

export const BooksScreen: React.FC = ({navigation}) => {
  const arr = [1, 2, 3];
  const {show, setShow} = useStore();
  const onGoBack = () => navigation.goBack();
  const onClose = () => setShow(false);
  const cancelRef = React.useRef(null);
  return (
    <Flex alignItems="center" w="100%">
      {arr.map(item => {
        return <BookBox key={item} />;
      })}

      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={show}
        onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.Header>
            <Text pt="2" textAlign="center">
              <Icon name="cookie" color="light.900" size="2xl" as={VIcon} />
            </Text>
          </AlertDialog.Header>
          <AlertDialog.Body>
            <Text textAlign="center" fontSize="lg">
              确定要导入这本单词吗？
            </Text>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Box
              w="100%"
              justifyContent="space-between"
              alignItems="center"
              flexDirection="row">
              <Button
                variant="outline"
                colorScheme="light"
                color="light.100"
                onPress={onClose}
                w="48%">
                取消
              </Button>
              <Button
                w="48%"
                colorScheme="light"
                bg="light.900"
                onPress={onClose}>
                确定
              </Button>
            </Box>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Flex>
  );
};
