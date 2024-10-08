import { TodoSliceState } from '@/lib/features/todos/todoSlice';

export const removeItemOnceInTodo = (todosState: TodoSliceState[], id: number) => {
  // filter todos except removed todo
  return todosState.filter((todo)=>todo.id != id)
}
