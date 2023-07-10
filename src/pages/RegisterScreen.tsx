import React, {useState} from 'react';
import {
  Flex,
  Box,
  FormControl,
  Input,
  Button,
  Pressable,
  Icon,
} from 'native-base';
import VIcon from 'react-native-vector-icons/Ionicons';

export const RegisterScreen: React.FC = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <Flex
      h="100%"
      w="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column">
      <Box w="80%">
        <FormControl>
          <FormControl.Label>用户名</FormControl.Label>
          <Input
            colorScheme="light"
            borderColor="light.800"
            placeholder="请输入用户名，至少 5 位"
          />
        </FormControl>
        <FormControl mt="2">
          <FormControl.Label>密码</FormControl.Label>
          <Input
            colorScheme="light"
            borderColor="light.800"
            type={show ? 'text' : 'password'}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon
                  as={<VIcon name={show ? 'eye-outline' : 'eye-off-outline'} />}
                  mr="2"
                  size={5}
                />
              </Pressable>
            }
            placeholder="请输入密码，至少 8 位"
          />
        </FormControl>
        <Button colorScheme="light" mt="8" bg="light.900">
          注册
        </Button>
      </Box>
    </Flex>
  );
};
