import {useState} from 'react';
import {useSetRecoilState} from 'recoil'
import { todoListState } from '../atoms/todo-list';
let id = 0;
const getId = () => id++;
export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((prev) => [
      ...prev,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  }
  const onChange = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value)
  }

  return (
    <div>
      <input type='text' value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  )
}
