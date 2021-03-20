import { atom } from 'recoil';

export enum TODO_STATUS {
  SHOW_ALL = 'Show All',
  SHOW_COMPLETED = 'Show Completed',
  SHOW_UNCOMPLETED = 'Show Uncompleted'
}
export const todoListFilterState = atom<TODO_STATUS>({
  key: 'todoListFilterState',
  default: TODO_STATUS.SHOW_ALL
})
