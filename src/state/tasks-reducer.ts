import {TasksStateType} from "../App";

export type RemoveTaskActionType = ReturnType<typeof removeTaskAC>

export type ChangeTaskStatusType = ReturnType<typeof changeTaskStatusAC>

type ActionsType = RemoveTaskActionType | ChangeTaskStatusType


export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
  switch (action.type) {
    case "REMOVE-TASK": {
      return {...state,
        [action.todolistId]: state[action.todolistId].filter(el => el.id !== action.taskId)}
    }
    case "CHANGE-TASK-STATUS": {
      return {...state, [action.todolistId]: state[action.todolistId]
          .map(el => el.id === action.taskId ? {...el, isDone: action.isDone} : el)}
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
