import { Button, TextField } from "@mui/material";
import { ChangeEvent } from "react";
type props = {
  newTodoString: string;
  onNewTodoChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAddingBtnClick: () => void;
};

export const CreateNewToDo = ({
  newTodoString,
  onNewTodoChange,
  onAddingBtnClick,
}: props) => {
  return (
    <>
      <TextField
        size="small"
        value={newTodoString}
        onChange={onNewTodoChange}
      />
      <Button variant="contained" onClick={onAddingBtnClick}>
        Add
      </Button>
    </>
  );
};
