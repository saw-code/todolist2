import React, {ChangeEvent, useState} from 'react';

type PropsType = {
  oldTitle: string
  callBack: (newTitle: string) => void
}

export const EditableSpan = (props: PropsType) => {
  let [newTitle, setNewTitle] = useState(props.oldTitle)

  const [edit, setEdit] = useState(false)

  const editFooHandler = () => {
    setEdit(!edit)
    props.callBack(newTitle)
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.currentTarget.value)
  }

  return (
    edit
      ? <input onChange={onChangeHandler} value={newTitle} onBlur={editFooHandler} autoFocus/> // autoFocus по умолчанию true
      : <span onDoubleClick={editFooHandler}>{props.oldTitle}</span>
  );
};
