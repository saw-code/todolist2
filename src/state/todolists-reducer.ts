import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

export type RemoveTodolistActionType = {
  type: "REMOVE-TODOLIST",
  id: string
}

export type AddTodolistActionType = {
  type: "ADD-TODOLIST",
  title: string
}

export type ChangeTodolistTitleActionType = {
  type: "CHANGE-TODOLIST-TITLE",
  id: string
  title: string
}

export type ChangeTodolistFilterActionType = {
  type: "CHANGE-TODOLIST-FILTER",
  id: string
  filter: FilterValuesType
}

type MainType = RemoveTodolistActionType | AddTodolistActionType | ChangeTodolistTitleActionType | ChangeTodolistFilterActionType

export const todolistsReducer = (state: Array<TodolistType>, action: MainType) => {
  switch (action.type) {
    case "REMOVE-TODOLIST": {
      return state.filter(tl => tl.id !== action.id)
    }
    case "ADD-TODOLIST" : {
      return [...state, {id: v1(), title: action.title, filter: "all"}]
    }
    case "CHANGE-TODOLIST-TITLE": {
      return state.map(el => el.id === action.id ? {...el, title: action.title} : el)
    }
    case "CHANGE-TODOLIST-FILTER": {
      let todolist = state.find(tl => tl.id === action.id)
      if (todolist) {
        todolist.filter = action.filter;
      }
      return [...state]
    }
    default:
      throw new Error("I don't understand this action type")
  }
}

export const RemoveTodolistAC = (todolistId: string): RemoveTodolistActionType => {
  return {
    type: "REMOVE-TODOLIST",
    id: todolistId}
}