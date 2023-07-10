import React, {useState} from 'react';
import {
  Flex,
  Text,
  Box,
  FormControl,
  Input,
  Button,
  Pressable,
  Icon,
  Image,
} from 'native-base';
import VIcon from 'react-native-vector-icons/Ionicons';
import {useLogin, instance} from '../hooks';
const logo = require('../logo/logo-no-bg-black.png');

export const LoginScreen: React.FC = () => {
  const [show, setShow] = useState(false);
  const {loading, login} = useLogin();
  const onLogin = () => {
    // login({username: 'kevinxft', password: '123456'});
    console.log(instance);
    instance
      .post('/auth/login', {username: 'kevin', password: '123456'})
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };
  return (
    <Flex alignItems="center" flexDirection="column" pt="10">
      <Box w="80%">
        <Box w="100%" justifyContent="center" alignItems="center" mb="6">
          <Image source={logo} size={100} alt="wordchips logo" />
        </Box>

        <FormControl>
          <Input
            colorScheme="light"
            bg="light.100"
            borderColor="light.800"
            placeholder="请输入用户名，至少 5 位"
          />
        </FormControl>
        <FormControl mt="4">
          <Input
            colorScheme="light"
            borderColor="light.800"
            bg="light.100"
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
        <Button
          onPress={onLogin}
          colorScheme="light"
          mt="8"
          mb="8"
          bg="light.900">
          登录
        </Button>
        <Box mb="10" justifyContent="center" alignItems="center">
          <Text color="light.900">
            还没有账号？
            <Text color="light.600" bold underline>
              点击注册
            </Text>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};
