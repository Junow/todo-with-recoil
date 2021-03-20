import {useRecoilState} from 'recoil'
import { todoListState, ITodoItem } from '../atoms/todo-list'

const replaceItemAtIndex = (
  arr: ITodoItem[],
  index: number,
  newValue: ITodoItem,
) => {
  return [...arr.slice(0,index), newValue, ...arr.slice(index + 1)];
}

const removeItemAtIndex = (
  arr: ITodoItem[],
  index: number,
) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
interface Props {
  item: ITodoItem
}
export const TodoItem = ({item}: Props) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value
    })

    setTodoList(newList);
  }
  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  }

  return (
    <div>
      <input type='text' value={item.text} onChange={editItemText} />
      <input
        type='checkbox'
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  )
}
