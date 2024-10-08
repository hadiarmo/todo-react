import { removeItemOnceInTodo } from "./../../modules/todoRemover";
import { createAppSlice } from "@/lib/createAppSlice";
import { editItemOnceInTodo } from "@/lib/modules/todoEditor";
import { addItemOnceInTodo } from "@/lib/modules/todoAdder";
import type { PayloadAction } from "@reduxjs/toolkit";

export type statusType = "todo" | "progress" | "done";

export interface TodoSliceState {
  id: number;
  title: string;
  status: statusType;
}

export interface TodoInfoState {
  title: string;
}

const initialState: TodoSliceState[] = [
  {
    id: 3,
    title: "this is a test todo",
    status: "progress",
  },
  {
    id: 2,
    title: "this is a test todo",
    status: "done",
  },
  {
    id: 1,
    title: "this is a test todo",
    status: "todo",
  },
];

// If you are not using async thunks you can use the standalone `createSlice`.
export const todosSlice = createAppSlice({
  name: "todos",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    addtodo: create.reducer((state, action: PayloadAction<TodoInfoState>) => {
      return addItemOnceInTodo(state, action.payload);
    }),

    deletetodo: create.reducer((state, action: PayloadAction<number>) => {
      return [...removeItemOnceInTodo(state, action.payload)];
    }),

    edittodo: create.reducer((state, action: PayloadAction<TodoSliceState>) => {
      return [...editItemOnceInTodo(state, action.payload)];
    }),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectTodos: (todos) => todos,
    selectDoneTodos: (todos) => todos.filter((todo) => todo.status == "done"),
    selectProgressTodos: (todos) =>
      todos.filter((todo) => todo.status == "progress"),
    selectLaterTodos: (todos) => todos.filter((todo) => todo.status == "todo"),
  },
});

// Action creators are generated for each case reducer function.
export const { addtodo, deletetodo, edittodo } = todosSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const {
  selectTodos,
  selectDoneTodos,
  selectProgressTodos,
  selectLaterTodos,
} = todosSlice.selectors;
