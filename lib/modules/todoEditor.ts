import { TodoSliceState } from '@/lib/features/todos/todoSlice';

export const editItemOnceInTodo = (todosState: TodoSliceState[], newValue: TodoSliceState) => {
    // find edited todo and Insert new todo (edited todo)
    const todos = todosState.map(todo => {
        if (todo.id === newValue.id) {
            return  newValue
        }
        return {...todo};
    });
    console.log(todos)
  return todos;
}
