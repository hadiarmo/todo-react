"use client";

import { deletetodo, TodoSliceState } from "@/lib/features/todos/todoSlice";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/Button";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useAppDispatch } from "@/lib/hooks";
import { Box } from "@mui/material";
import { useState } from "react";
import EditTodoPupop from "./editTodoPupop";

export default function SingleTodo(props: TodoSliceState) {
    const dispatch = useAppDispatch();
    
    
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <Box
        sx={[
          (theme) => ({
            boxShadow: 1,
            bgcolor: "violet.light",
            borderRadius: 1,
            my: 1,
            p: 1,
            width: "100%",
            display: "inline-flex",
            justifyContent: "space-between",
            alignItems: "center",

            ...theme.applyStyles("dark", {
              bgcolor: "violet.dark",
            }),
          }),
        ]}
      >
        <Typography
          sx={{
            ml:1,
            textDecoration: `${props.status == "done" ? "line-through" : ""}`,
          }}
          variant="body1"
          display="block"
          color={
            props.status == "done"
              ? "success"
              : props.status == "progress"
              ? "warning"
              : ""
          }
        >
          {props.title}
        </Typography>
        <Box sx={{ display: "inline-flex", gap: 2 }}>
          <IconButton
            sx={{ minWidth: 0, p: "3px" }}
            variant="outlined"
            color="secondary"
            onClick={handleClickOpen}
          >
            <ModeEditOutlinedIcon sx={{ width: "25px", height: "25px" }} />
          </IconButton>

          <IconButton
            sx={{ minWidth: 0, p: "3px" }}
            variant="outlined"
            color="secondary"
            onClick={()=>{
                dispatch(deletetodo(props.id)) 
            }}
          >
            <DeleteOutlineOutlinedIcon sx={{ width: "25px", height: "25px" }} />
          </IconButton>
        </Box>
      </Box>

      <EditTodoPupop
        open={open}
        onClose={handleClose}
        todo={props}
      />

    </>
  );
}
