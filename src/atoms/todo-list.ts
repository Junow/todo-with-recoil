import {atom} from 'recoil'

export interface ITodoItem {
  id: number;
  text: string;
  isComplete: boolean;
}

export const todoListState = atom<ITodoItem[]>({
  key: 'todoListState',
  default: [],
})
