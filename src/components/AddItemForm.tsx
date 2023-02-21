import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

type SuperInputPropsType = {
  callBack: (title: string) => void
}

export const AddItemForm = (props: SuperInputPropsType) => {
  let [title, setTitle] = useState("")
  let [error, setError] = useState<string | null>(null)

  const addTask = () => {
    let newTitle = title.trim();
    if (newTitle !== "") {
      props.callBack(newTitle);
      setTitle("");
    } else {
      setError("Title is required");
    }
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.key === "Enter") {
      addTask();
    }
  }

  const buttonSettings = {
    maxWidth: "38px",
    maxHeight: "38px",
    minWidth: "38px",
    minHeight: "38px",
  }

  return (
    <div>

      <TextField value={title}
                 onChange={onChangeHandler}
                 onKeyPress={onKeyPressHandler}
                 id="outlined-basic"
                 label={error ? "Title is required" : "Welcome"}
                 variant="outlined"
                 size="small"
                 error={!!error}
      />

      {/*<input value={title}*/}
      {/*       onChange={onChangeHandler}*/}
      {/*       onKeyPress={onKeyPressHandler}*/}
      {/*       className={error ? "error" : ""}*/}
      {/*/>*/}
      <Button
        style={buttonSettings}
        onClick={addTask}
        size="small"
        variant="contained">+</Button>
      {/*{error && <div className="error-message">{error}</div>}*/}
    </div>
  );
};
