import { TodoInfoState, TodoSliceState } from '@/lib/features/todos/todoSlice';

export const addItemOnceInTodo = (todoState: TodoSliceState[], value: TodoInfoState) => {
    // create single todo and handle id counter
    let dataTodo:TodoSliceState = {
      id: todoState[0] ? todoState[0].id + 1 :  1,
      title: value.title,
      status: "todo",
    };
    todoState.unshift(dataTodo);
  return todoState;
}
