"use client";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { edittodo, statusType, TodoSliceState } from "@/lib/features/todos/todoSlice";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import { useState } from "react";

import IconButton from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useAppDispatch } from "@/lib/hooks";

// interface for component props
export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
  todo: TodoSliceState;
}

export default function EditTodoPupop(props: SimpleDialogProps) {
  

  const dispatch = useAppDispatch();

  const { onClose, open, todo } = props;
  const [title, setTitle] = useState(todo.title);
  const [status, setStatus] = useState(todo.status);


  const handleSave = () => {
    dispatch(edittodo({id:todo.id,title:title,status:status}))
    onClose()
  }
  
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Edit Todo</DialogTitle>
      <DialogContent>
        <IconButton
          size="small"
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "grey.500",
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box sx={{ width: "min-content", my: 1 }}>
          <TextField
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(event.target.value);
            }}
            defaultValue={todo.title}
            color="secondary"
            focused
            size="small"
            sx={{ width: "300px", mx: 3 }}
            id="outlined-basic"
            label="edit title of todo "
            variant="outlined"
          />

          <FormControl sx={{mt:2}}>
            <FormLabel color="secondary" id="demo-row-radio-buttons-group-label">
              Status
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={event => setStatus(event.target.value as statusType)}
              defaultValue={todo.status}
              value={status}
            >
              <FormControlLabel value="todo" control={<Radio color="secondary" />} label="todo" />
              <FormControlLabel
                value="progress"
                control={<Radio color="secondary" />}
                label="progress"
              />
              <FormControlLabel value="done" control={<Radio color="secondary" />} label="done" />
            </RadioGroup>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button color="warning" autoFocus onClick={onClose}>
          Cancel
        </Button>
        <Button color="secondary" onClick={handleSave}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
}
