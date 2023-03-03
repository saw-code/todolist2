import {TasksStateType} from "../App";
import {v1} from "uuid";
import {AddTodolistACType} from "./todolists-reducer";

export type RemoveTaskActionType = ReturnType<typeof removeTaskAC>
export type ChangeTaskStatusType = ReturnType<typeof changeTaskStatusAC>
export type AddTaskType = ReturnType<typeof addTaskAC>
export type ChangeTaskTitleType = ReturnType<typeof changeTaskTitleAC>

type ActionsType = RemoveTaskActionType
  | ChangeTaskStatusType
  | AddTaskType
  | ChangeTaskTitleType
  | AddTodolistACType



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

    case "CHANGE-TASK-TITLE": {
      return {
        ...state, [action.todolistId]: state[action.todolistId]
          .map(el => el.id === action.taskId ? {...el, title: action.title} : el)
      }
    }

    case "ADD-TODOLIST": {
      return {...state, [v1()]: []}
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

export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string) => {
  return {
    type: "CHANGE-TASK-TITLE",
    taskId,
    title,
    todolistId
  } as const
}

// export const addTodolistAC = (todoList: string) => {
//   return {
//     type: "ADD-NEW-TODOLIST",
//     todoList
//   } as const
// }