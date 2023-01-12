import React from "react";

type TasksType = {
  taskId: number
  title: string
  isDone: boolean
}

type ObjectType = {
  title: string
  tasks: Array<TasksType>
  students: Array<string>
}

type SchoolType = {
  value: ObjectType
}

export function Tasks(props: SchoolType) {
  return (
    <div className="App">
      <div>
        <h3>{props.value.title}</h3>
        <ul>
          {props.value.tasks.map(task => {
            return (
              <li><input type="checkbox" checked={task.isDone}/> <span>{task.title}</span></li>
            )
          })}
        </ul>

        <h3>Students list</h3>
        <ul>
          {props.value.students.map(student => {
            return (
              <li><span>{student}</span></li>
            )
          })}
        </ul>

        <div>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </div>
    </div>
  )
}

// export const Tasks = (props: SchoolType) => {
//   return (
//     <div>
//       <h1>{props.value.title}</h1>
//       <ul>
//         {props.value.tasks.map(el => {
//           return (
//             <li>
//               <span>{el.taskId}</span>
//               <span>{el.title}</span>
//               <span>{el.isDone}</span>
//             </li>
//           )
//         })}
//       </ul>
//
//       <ul>
//         {props.value.students.map(el => {
//           return (
//             <li>{el}</li>
//           )
//         })}
//       </ul>
//     </div>
//   );
// };