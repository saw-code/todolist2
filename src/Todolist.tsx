import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType, TasksType} from './App';
import {SuperButton} from "./components/SuperButton";

export type TaskType = {
  id: number
  title: string
  isDone: boolean
}

type PropsType = {
  id: number
  title: string
  tasks: Array<TasksType>
  students: Array<string>
  removeTask: (taskId: string, todolistId: number) => void
  changeFilter: (value: FilterValuesType, todolistId: number) => void
  addTask: (title: string, todolistId: number) => void
  changeTaskStatus: (id: string, isDone: boolean, todolistId: number) => void
  removeTodolist: (id: number) => void
  filter: FilterValuesType
}

export function Todolist(props: PropsType) {
  let [title, setTitle] = useState("")
  let [error, setError] = useState<string | null>(null)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.charCode === 13) {
      addTaskHandler()
    }
  }

  const removeTodolistHandler = () => {
    props.removeTodolist(props.id)
  }

  const addTaskHandler = () => {
    props.addTask(title, props.id)
    setTitle("")
  }

  const removeTaskHandler = (taskID: string) => {
    props.removeTask(taskID, props.id)
  }

  const changeFilterHandler = (filterValue: FilterValuesType) => {
      props.changeFilter(filterValue, props.id)
  }

  return <div>
    <h3> {props.title}
      <SuperButton name={"X"} callBack={removeTodolistHandler}/>
    </h3>
    <div>
      <input value={title}
             onChange={onChangeHandler}
             onKeyPress={onKeyPressHandler}
             className={error ? "error" : ""}
      />
      <SuperButton name={"+"} callBack={addTaskHandler}/>
      {error && <div className="error-message">{error}</div>}
    </div>
    <ul>
      {
        props.tasks.map(t => {
          // const removeTaskHandler = () => { /второй вариант из map
          //   props.removeTask(t.taskId, props.id)
          // }

          const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            let newIsDoneValue = e.currentTarget.checked;
            props.changeTaskStatus(t.taskId, newIsDoneValue, props.id);
          }

          return <li key={t.taskId} className={t.isDone ? "is-done" : ""}>
            <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
            <span>{t.title}</span>
            <SuperButton name={"X"} callBack={()=>removeTaskHandler(t.taskId)}/>
          </li>
        })
      }
    </ul>
    <div>
      <SuperButton name={"All"} callBack={() => changeFilterHandler("all")}/>
      <SuperButton name={"Active"} callBack={() => changeFilterHandler("active")}/>
      <SuperButton name={"Completed"} callBack={() => changeFilterHandler("completed")}/>
    </div>
    <p></p>
    {
      props.students.map((el) => {
        return (
          <div>{el}</div>
        )
      })
    }
  </div>
}

