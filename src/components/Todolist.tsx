import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from '../App';
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton'
import Checkbox from '@mui/material/Checkbox';
import {SuperCheckBox} from "./SuperCheckBox";

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

type PropsType = {
  id: string
  title: string
  tasks: Array<TaskType>
  removeTask: (taskId: string, todolistId: string) => void
  changeFilter: (value: FilterValuesType, todolistId: string) => void
  addTask: (title: string, todolistId: string) => void
  changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
  removeTodolist: (id: string) => void
  filter: FilterValuesType
  editTask: (todoListID: string, taskID:string, newTitle: string) => void
  editTodo: (todoListID:string, newTitle: string) => void
}

export function Todolist(props: PropsType) {
  const removeTodolist = () => props.removeTodolist(props.id)

  const onAllClickHandler = () => props.changeFilter("all", props.id);
  const onActiveClickHandler = () => props.changeFilter("active", props.id);
  const onCompletedClickHandler = () => props.changeFilter("completed", props.id);

  const addTaskHandler = (newTitle: string) => {
    props.addTask(newTitle, props.id)
  }

  const editTaskHandler = (tID: string, newTitle: string) => {
    props.editTask(props.id, tID, newTitle)
  }

  const editTodoListHandler = (newTitle: string) => {
    props.editTodo(props.id, newTitle)
  }

  const mappedTasks = props.tasks.map(t => {
    const onClickHandler = () => props.removeTask(t.id, props.id)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      let newIsDoneValue = e.currentTarget.checked;
      props.changeTaskStatus(t.id, newIsDoneValue, props.id);
    }

    const ChangeStatusHandler = (tID: string, checkedValue: boolean) => {
      props.changeTaskStatus(tID, checkedValue, props.id)
    }

    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
      <IconButton onClick={onClickHandler} aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <SuperCheckBox callBack={(checkedValue) => ChangeStatusHandler(t.id, checkedValue)} isDone={t.isDone} />
      {/*<Checkbox  defaultChecked color="success" onChange={onChangeHandler} checked={t.isDone} />*/}
      {/*<input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>*/}
      <EditableSpan oldTitle={t.title} callBack={(newTitle) => editTaskHandler(t.id, newTitle)}/>
    </li>
  })

  return <div>
    <h3>
      <EditableSpan oldTitle={props.title} callBack={editTodoListHandler}/>
      <IconButton onClick={removeTodolist} aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </h3>
    <AddItemForm callBack={addTaskHandler}/>
    <ul>
      {mappedTasks}
    </ul>
    <div>
      <Button variant={props.filter === 'all'? "outlined" : "contained" } color="success" onClick={onAllClickHandler}>All</Button>
      <Button variant={props.filter === 'active'? "outlined" : "contained" } color="error" onClick={onActiveClickHandler}>Active</Button>
      <Button variant={props.filter === 'completed'? "outlined" : "contained" } onClick={onCompletedClickHandler}>Completed</Button>



      {/*<button className={props.filter === 'all' ? "active-filter" : ""}*/}
      {/*        onClick={onAllClickHandler}>All*/}
      {/*</button>*/}
      {/*<button className={props.filter === 'active' ? "active-filter" : ""}*/}
      {/*        onClick={onActiveClickHandler}>Active*/}
      {/*</button>*/}
      {/*<button className={props.filter === 'completed' ? "active-filter" : ""}*/}
      {/*        onClick={onCompletedClickHandler}>Completed*/}
      {/*</button>*/}
    </div>
  </div>
}
