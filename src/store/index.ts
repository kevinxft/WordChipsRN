import {create} from 'zustand';
import {HTTP, loginType} from '../api';

export type WorkBookType = {
  name: string;
  id: number;
  count: number;
  learned: number;
};

type State = {
  isLogined: boolean;
  isLearning: boolean;
  isLoading: boolean;
  user: Object;
  wordBooks: WorkBookType[];
};

type Actions = {
  login: (payload: loginType) => void;
  register: (payload: loginType) => void;
  toggleLearning: (flag: boolean) => void;
};

export const useStore = create<State & Actions>(set => ({
  isLogined: true,
  isLearning: false,
  isLoading: false,
  user: {},
  wordBooks: [
    {
      id: 1,
      name: '无敌他妈的英语三千词语!',
      count: 3000,
      learned: 1000,
    },
  ],
  login: async (payload: loginType) => {
    set({isLoading: true});
    const res = await HTTP.login(payload);
    console.log(res);
    set({isLoading: false, isLogined: true, user: res});
  },
  register: async (payload: loginType) => {
    set({isLoading: true});
    const res = await HTTP.register(payload);
    set({isLoading: false, user: res});
  },
  toggleLearning: (flag: boolean) => {
    console.log(flag);
    set({isLearning: flag});
  },
  getWordBooks: async () => {
    set({isLoading: true});
    const res = await HTTP.getWordBooks();
    set({isLoading: false, wordBooks: res});
  },
}));
