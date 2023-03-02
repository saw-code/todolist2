import {TasksStateType} from "../App";

export type RemoveTaskActionType = ReturnType<typeof removeTaskAC>

export type SecondActionType = {
  type: ""
}

type ActionsType = RemoveTaskActionType | SecondActionType


export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
  switch (action.type) {
    case "REMOVE-TASK": {
      return {...state,
        [action.todolistId]: state[action.todolistId].filter(el => el.id !== action.taskId)}
    }
    case "" : {
      return state
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

export const secondAC = (todolistId: string): SecondActionType => {
  return {
    type: ""
  }
}
