import {useRecoilValue} from 'recoil'
import {filteredTodoListState} from '../atoms/filtered-todo-list-state'
import {TodoItemCreator} from './todo-item-creator'
import {TodoItem} from './todo-item'
import { TodoListFilters } from './filtered-todo-list'
import { TodoListStats } from './todo-list-stats'

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats/>
      <TodoListFilters/>
      <TodoItemCreator/>
      {
        todoList.map(todoItem => {
          return <TodoItem key={todoItem.id} item={todoItem}/>
        })
      }
    </>
  )
}