"use client";

import {
  selectDoneTodos,
  selectLaterTodos,
  selectProgressTodos,
  selectTodos,
} from "@/lib/features/todos/todoSlice";
import { useAppSelector } from "@/lib/hooks";
import AddNewTodoForm from "./nested/addNewTodoForm";
import { Container } from "@mui/system";
import SingleTodo from "./nested/singleTodo";
import { Box, Typography } from "@mui/material";

export default function TodoPage() {
  // Get todo info
  const doneTodos = useAppSelector(selectDoneTodos);
  const progressTodos = useAppSelector(selectProgressTodos);
  const laterTodos = useAppSelector(selectLaterTodos);

  // category
  const status = ["todo", "progress", "done"];

  return (
    <Container maxWidth="sm">
      <AddNewTodoForm />

      {/* handle all category */}
      {status.map((s) => {
        return (
          <Box key={s} sx={{ mt: 2 }}>
            <Typography variant="h2" sx={{ fontSize: "1rem", mb: 1 }}>
              {s == "todo"
                ? `Tasks to do - ${laterTodos.length}`
                : s == "progress"
                ? `Tasks in progress - ${progressTodos.length}`
                : `Tasks done - ${doneTodos.length}`}
            </Typography>
            {(s == "todo"
              ? laterTodos
              : s == "progress"
              ? progressTodos
              : doneTodos
            ).map((todo) => {
              return (
                <SingleTodo
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  status={todo.status}
                />
              );
            })}
          </Box>
        );
      })}
    </Container>
  );
}
