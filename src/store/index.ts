import {create} from 'zustand';
import {API, loginType} from '../api';
import {fakeLearningWords} from './fakeData';

export enum Familiarity {
  LOW = 0,
  MEDIUM = 1,
  HIGH = 2,
  EXPERT = 3,
}

export type WorkBookType = {
  name: string;
  id: number;
  count: number;
  learned: number;
};

export type WordType = {
  name: string;
  level: number;
  sound: string;
  desc: string;
  toDelete: boolean;
  isUpward?: boolean;
  isMade?: boolean;
  isReaded?: boolean;
};

type State = {
  isLogined: boolean;
  isLearning: boolean;
  isLoading: boolean;
  user: Object;
  wordBooks: WorkBookType[];
  learningWords: any[];
};

type Actions = {
  login: (payload: loginType) => void;
  register: (payload: loginType) => void;
  toggleLearning: (flag: boolean) => void;
  updateLearningWords: (words: any[]) => void;
  reset: () => void;
};

const initialState = {
  isLogined: true,
  isLearning: true,
  isLoading: false,
  user: {},
  learningWords: [...fakeLearningWords],
  wordBooks: [
    {
      id: 1,
      name: '无敌他妈的英语三千词语!',
      count: 3000,
      learned: 1000,
    },
  ],
};

export const useStore = create<State & Actions>(set => ({
  ...initialState,
  reset: () => set(initialState),
  login: async (payload: loginType) => {
    set({isLoading: true});
    const res = await API.login(payload);
    set({isLoading: false, user: res});
  },
  register: async (payload: loginType) => {
    set({isLoading: true});
    const res = await API.register(payload);
    set({isLoading: false, user: res});
  },
  toggleLearning: (flag: boolean) => {
    set({isLearning: flag});
  },
  getWordBooks: async () => {
    set({isLoading: true});
    const res = await API.getWordBooks();
    set({isLoading: false, wordBooks: res});
  },
  updateLearningWords: async (learningWords: any[]) => {
    set({learningWords});
  },
  getLearningWords: async (bookId: number, amount: number = 10) => {
    set({isLoading: true});
    const res = await API.getWordsFromBook(bookId, amount);
    console.log(res);
    set({isLoading: false, learningWords: fakeLearningWords});
  },
}));
