import React from 'react';
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
import {useStore} from '../../store';
const logo = require('../../logo/logo-no-bg-black.png');
import {create} from 'zustand';

const localStore = create(set => ({
  show: false,
  username: '',
  password: '',
  setShow: (show: boolean) => set({show}),
  setUsername: (username: string) => set({username}),
  setPassword: (password: string) => set({password}),
}));

export const LoginScreen = ({isRegister, navigation}) => {
  const login = useStore(state => state.login);
  const {show, setShow, username, password, setPassword, setUsername} =
    localStore();

  const toLogin = () => {
    console.log('toLogin');
    console.log({username, password});
  };

  const toRegister = () => {
    console.log('toRegister');
    console.log({username, password});
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
            onChangeText={text => setUsername(text)}
          />
        </FormControl>
        <FormControl mt="4">
          <Input
            colorScheme="light"
            borderColor="light.800"
            bg="light.100"
            type={show ? 'text' : 'password'}
            onChangeText={text => setPassword(text)}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon
                  name={show ? 'eye-outline' : 'eye-off-outline'}
                  as={VIcon}
                  mr="2"
                  size={5}
                />
              </Pressable>
            }
            placeholder="请输入密码，至少 8 位"
          />
        </FormControl>

        <Button
          onPress={isRegister ? toRegister : toLogin}
          colorScheme="light"
          mt="8"
          mb="8"
          bg="light.900">
          {isRegister ? '注册' : '登录'}
        </Button>

        <Box mb="10" justifyContent="center" alignItems="center">
          <Text>
            {isRegister ? '已有账号了！' : '还没有账号？'}
            <Text
              color="light.600"
              bold
              underline
              onPress={
                isRegister
                  ? () => navigation.goBack()
                  : () => navigation.navigate('Register')
              }>
              {isRegister ? '点击返回' : '点击注册'}
            </Text>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};
