import { useRecoilState } from 'recoil';
import { todoListFilterState, TODO_STATUS } from '../atoms/todo-list-filter-state';

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const updateFilter = ({target: {value}}: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(value as TODO_STATUS);
  }

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value={TODO_STATUS.SHOW_ALL}>ALL</option>
        <option value={TODO_STATUS.SHOW_COMPLETED}>Completed</option>
        <option value={TODO_STATUS.SHOW_UNCOMPLETED}>Uncompleted</option>
      </select>
    </>
  )
}
