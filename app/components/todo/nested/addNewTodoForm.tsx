"use client";

import { addtodo, selectTodos } from "@/lib/features/todos/todoSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

import IconButton from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";


export default function AddNewTodoForm() {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState("");

  // add new todo bottom handler
  const pushTodo = () => {
    if(title){
      dispatch(addtodo({title:title}));
    }else{
      alert("faild");
    }
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2, 
      }} 
    >
      <TextField
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setTitle(event.target.value);
        }}
        color="secondary"
        focused
        size="small"
        sx={{ width: "100%" }}
        id="outlined-basic"
        label="enter todo "
        variant="outlined"
      />
      <IconButton
        sx={{ minWidth: 0, p: 0.5 }}
        variant="contained"
        aria-label="addTodoButton"
        color="secondary"
        onClick={pushTodo}
      >
        <AddIcon sx={{ width: "30px", height: "30px" }} />
      </IconButton>
    </Box>
  );
}
