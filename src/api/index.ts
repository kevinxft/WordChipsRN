import axios from 'axios';
const baseURL = 'http://192.168.2.8:3000';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const instance = axios.create({baseURL, headers: {}});

export type loginType = {
  username: string;
  password: string;
};

export const setLocalData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error(e);
  }
};

export const getLocalData = async (key: string) => {
  try {
    const res = await AsyncStorage.getItem(key);
    if (res) {
      return JSON.parse(res);
    }
    return '';
  } catch (error) {
    console.error(error);
  }
};

export const HTTP = {
  async login(payload: loginType) {
    return instance.post('/auth/login', payload);
  },
  async register(payload: loginType) {
    return instance.post('/auth/register', payload);
  },
  async getWordBooks() {
    return [];
  },
};
