import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './components/Todolist';
import {v1} from 'uuid';
import {AddItemForm} from "./components/AddItemForm";
import {ButtonAppBar} from "./components/ButtonAppBar";
import {Container, Grid, Paper} from "@mui/material";

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistType = {
  id: string
  title: string
  filter: FilterValuesType
}

export type TasksStateType = {
  [key: string]: Array<TaskType>
}

function App() {
  let todolistId1 = v1();
  let todolistId2 = v1();

  let [todolists, setTodolists] = useState<Array<TodolistType>>([
    {id: todolistId1, title: "What to learn", filter: "all"},
    {id: todolistId2, title: "What to buy", filter: "all"}
  ])

  let [tasks, setTasks] = useState<TasksStateType>({
    [todolistId1]: [
      {id: v1(), title: "HTML&CSS", isDone: true},
      {id: v1(), title: "JS", isDone: true}
    ],
    [todolistId2]: [
      {id: v1(), title: "Milk", isDone: true},
      {id: v1(), title: "React Book", isDone: true}
    ]
  });

  const editTodo = (todoListID: string, newTitle: string) => {
    const editValue = todolists.map(el => el.id === todoListID ? {...el, title: newTitle} : el)
    setTodolists(editValue)
  }

  const editTask = (todoListID: string, taskID: string, newTitle: string) => {
    const editValue = {
      ...tasks,
      [todoListID]: tasks[todoListID].map(el => el.id === taskID ? {...el, title: newTitle} : el)
    }
    setTasks(editValue)
  }

  function removeTask(id: string, todolistId: string) {
    //достанем нужный массив по todolistId:
    let todolistTasks = tasks[todolistId];
    // перезапишем в этом объекте массив для нужного тудулиста отфилтрованным массивом:
    tasks[todolistId] = todolistTasks.filter(t => t.id !== id);
    // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
    setTasks({...tasks});
  }

  function addTask(title: string, todolistId: string) {
    let task = {id: v1(), title: title, isDone: false};
    //достанем нужный массив по todolistId:
    let todolistTasks = tasks[todolistId];
    // перезапишем в этом объекте массив для нужного тудулиста копией, добавив в начало новую таску:
    tasks[todolistId] = [task, ...todolistTasks];
    // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
    setTasks({...tasks});
  }

  function changeStatus(id: string, isDone: boolean, todolistId: string) {
    //достанем нужный массив по todolistId:
    let todolistTasks = tasks[todolistId];
    // найдём нужную таску:
    let task = todolistTasks.find(t => t.id === id);
    //изменим таску, если она нашлась
    if (task) {
      task.isDone = isDone;
      // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
      setTasks({...tasks});
    }
  }

  function changeFilter(value: FilterValuesType, todolistId: string) {
    let todolist = todolists.find(tl => tl.id === todolistId);
    if (todolist) {
      todolist.filter = value;
      setTodolists([...todolists])
    }
  }

  function removeTodolist(id: string) {
    // засунем в стейт список тудулистов, id которых не равны тому, который нужно выкинуть
    setTodolists(todolists.filter(tl => tl.id !== id));
    // удалим таски для этого тудулиста из второго стейта, где мы храним отдельно таски
    delete tasks[id]; // удаляем св-во из объекта... значением которого являлся массив тасок
    // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
    setTasks({...tasks});
  }

  const addTodoList = (newTitle: string) => {
    const newTodoID = v1()
    const newTodoList: TodolistType = {id: newTodoID, title: newTitle, filter: "all"}
    setTodolists([newTodoList, ...todolists])
    setTasks({[newTodoID]: [], ...tasks})
  }

  return (
    <div className="App">
      <ButtonAppBar/>
      <Container fixed>
        <Grid container style={{padding: "20px"}}>
          <AddItemForm callBack={addTodoList}/>
        </Grid>
        <Grid container spacing={12}>
          {
            todolists.map(tl => {
              let allTodolistTasks = tasks[tl.id];
              let tasksForTodolist = allTodolistTasks;

              if (tl.filter === "active") {
                tasksForTodolist = allTodolistTasks.filter(t => !t.isDone);
              }
              if (tl.filter === "completed") {
                tasksForTodolist = allTodolistTasks.filter(t => t.isDone);
              }

              return <Grid item>
                <Paper style={{padding: "10px"}}>
                  <Todolist
                    key={tl.id}
                    id={tl.id}
                    title={tl.title}
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={tl.filter}
                    removeTodolist={removeTodolist}
                    editTask={editTask}
                    editTodo={editTodo}
                  />
                </Paper>


              </Grid>
            })
          }
        </Grid>


      </Container>
    </div>
  );
}

export default App;
