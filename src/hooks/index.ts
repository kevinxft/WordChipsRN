import {useEffect, useState} from 'react';
import axios from 'axios';
const HTTP = 'http://192.168.2.8:3000';

export const instance = axios.create({baseURL: HTTP});

export const useLogin = () => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState('');
  const [form, setForm] = useState({});

  useEffect(() => {
    const login = async () => {
      if (loading) {
        return;
      }
      setLoading(true);
      const {data} = await instance.post('/auth/login', form);
      setToken(data.access_token);
      setLoading(false);
    };
    login();
  }, [form, loading]);

  return {
    loading,
    token,
    login: setForm,
  };
};
