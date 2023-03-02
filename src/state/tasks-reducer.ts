import {TasksStateType} from "../App";
import {v1} from "uuid";

export type RemoveTaskActionType = ReturnType<typeof removeTaskAC>
export type ChangeTaskStatusType = ReturnType<typeof changeTaskStatusAC>
export type AddTaskType = ReturnType<typeof addTaskAC>

type ActionsType = RemoveTaskActionType | ChangeTaskStatusType | AddTaskType


export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
  switch (action.type) {
    case "REMOVE-TASK": {
      return {
        ...state,
        [action.todolistId]: state[action.todolistId].filter(el => el.id !== action.taskId)
      }
    }
    case "CHANGE-TASK-STATUS": {
      return {
        ...state, [action.todolistId]: state[action.todolistId]
          .map(el => el.id === action.taskId ? {...el, isDone: action.isDone} : el)
      }
    }

    case "ADD-TASK": {
      let newTask = {id: v1(), title: action.title, isDone: false}
      return {
        ...state, [action.todolistId]: [newTask, ...state[action.todolistId]]
      }
    }

    default:
      throw new Error("I don't understand this action type")
  }
}

export const removeTaskAC = (taskId: string, todolistId: string) => {
  return {
    type: "REMOVE-TASK",
    taskId,
    todolistId
  } as const
}

export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string) => {
  return {
    type: "CHANGE-TASK-STATUS",
    taskId,
    isDone,
    todolistId
  } as const
}

export const addTaskAC = (title: string, todolistId: string) => {
  return {
    type: "ADD-TASK",
    title,
    todolistId
  } as const
}
