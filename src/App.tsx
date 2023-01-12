// 1-2 _________________________________________________________________
import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';


export type FilterValuesType = "all" | "active" | "completed" | "first_3_elements"

//Hi guys!
//1. Let's create a 'DELETE ALL TASKS' button, and place it above the filter buttons
//Clicking the button removes all tasks
//2. Let's create a fourth filter button-if you click it, the first three tasks will be displayed
//3. Relocate everything associated with  filters to the Todolist.tsx component. Make it work
//
// let [filter, setFilter] = useState<FilterValuesType>("all");
//
// let tasksForTodolist = tasks;
//
// if (filter === "active") {
//     tasksForTodolist = tasks.filter(t => t.isDone === false);
// }
// if (filter === "completed") {
//     tasksForTodolist = tasks.filter(t => t.isDone === true);
// }
//
// function changeFilter(value: FilterValuesType) {
//     setFilter(value);
// }

function App() {

  let [tasks, setTasks] = useState([
    {id: 1, title: "HTML&CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "ReactJS", isDone: false},
    {id: 4, title: "Rest API", isDone: false},
    {id: 5, title: "GraphQL", isDone: false},
  ]);

  function removeTask(id: number) {
    let filteredTasks = tasks.filter(t => t.id !== id);
    setTasks(filteredTasks);
  }

  let [deleteTasks, setDeleteTasks] = useState(1)
  function deleteAllTasks(elements: number) {
    setDeleteTasks(elements)
  }

  if(deleteTasks === 0){
    tasks = []
  }

  return (
    <div className="App">
      <Todolist title="What to learn"
                tasks={tasks}
                removeTask={removeTask}
                deleteTasks={deleteAllTasks}
      />
    </div>
  );
}

export default App;


//-------------------------------------------------------------------------

// import React, {useState} from 'react';
// import './App.css';
// import {Todolist} from './Todolist';
//
//
// export type FilterValuesType = "all" | "active" | "completed" | "three";
//
// function App() {
//
//     let [tasks, setTasks] = useState([
//         {id: 1, title: "HTML&CSS", isDone: true},
//         {id: 2, title: "JS", isDone: true},
//         {id: 3, title: "ReactJS", isDone: false},
//         {id: 4, title: "Rest API", isDone: false},
//         {id: 5, title: "GraphQL", isDone: false},
//     ]);
//
//     const deleteAllTasks = () => {
//         setTasks([])
//     }
//
//     function removeTask(id: number) {
//         let filteredTasks = tasks.filter(t => t.id != id);
//         setTasks(filteredTasks);
//     }
//
//     // let [filter, setFilter] = useState<FilterValuesType>("all");
//     //
//     // let tasksForTodolist = tasks;
//     //
//     // if (filter === "active") {
//     //     tasksForTodolist = tasks.filter(t => t.isDone === false);
//     // }
//     // if (filter === "completed") {
//     //     tasksForTodolist = tasks.filter(t => t.isDone === true);
//     // }
//     //
//     // function changeFilter(value: FilterValuesType) {
//     //     setFilter(value);
//     // }
//
//     return (
//         <div className="App">
//             <Todolist
//                 title="What to learn"
//                 tasks={tasks}
//                 removeTask={removeTask}
//                 //changeFilter={changeFilter}
//                 deleteAllTasks={deleteAllTasks}
//
//             />
//         </div>
//     );
// }
//
// export default App;


















// 1-1 ________________________________________________________________
//
// import React from 'react';
// import './App.css';
// import {Tasks} from "./components/Tasks";


// Hi Guys!
// Let's reinforce our current session!
// -You have 2 arrays. You should create a new component TASKS, where you will render these arrays.
// -Don't forget to assign types to our data.


// function App() {
//   const data1 = {
//     title: "What to do",
//     tasks: [
//       {taskId: 1, title: "HTML&CSS2", isDone: true},
//       {taskId: 2, title: "JS2", isDone: true}
//     ],
//     students: [
//       'Jago Wormald1',
//       'Saul Milne2',
//       'Aariz Hester3',
//       'Dion Reeve4',
//       'Anisa Ortega5',
//       'Blade Cisneros6',
//       'Malaikah Phelps7',
//       'Zeeshan Gallagher8',
//       'Isobella Vo9',
//       'Rizwan Mathis10',
//       'Menaal Leach11',
//       'Kian Walton12',
//       'Orion Lamb13',
//       'Faizah Huynh14',
//       'Crystal Vaughan15',
//       'Vivien Hickman16',
//       'Stuart Lu17',
//       'Karol Davison18',
//       'Dario Burns19',
//       'Chloe Rich20',
//       'Martyna Felix',
//       'Nida Glass',
//       'Maeve Miles',
//       'Hasnain Puckett',
//       'Ayman Cano',
//       'Safwan Perry',
//       'Fox Kelly',
//       'Louise Barlow',
//       'Malaki Mcgill',
//       'Leanna Cline',
//       'Willard Hodge',
//       'Amelia Dorsey',
//       'Kiah Porter',
//       'Jeanne Daly',
//       'Mohsin Armstrong',
//       'Laurie Rangel',
//       'Princess Tierney',
//       'Kasim Kendall',
//       'Darryl Cope',
//       'Elysha Ray',
//       'Liyana Harris',
//       'Kashif Blackburn',
//       'Atif Zimmerman',
//       'Sila Hartley',
//       'Ralphie Hebert',
//     ]
//   }
//   const data2 = {
//     title: "What to learn",
//     tasks: [
//       {taskId: 1, title: "HTML&CSS", isDone: true},
//       {taskId: 2, title: "JS", isDone: true}
//     ],
//     students: [
//       'Rick Kane',
//       'Finnlay Bentley',
//       'Samia North',
//       'Isaac Morton',
//       'Lily-Ann Clifford',
//       'Thalia Park',
//       'Sapphire Cruz',
//       'Cieran Vazquez',
//       'Anya Estes',
//       'Dominika Field',
//       'Rosanna Chung',
//       'Safiyah Davey',
//       'Ryley Beasley',
//       'Kalvin Trejo',
//       'Evie-Mae Farrell',
//       'Juliet Valencia',
//       'Astrid Austin',
//       'Lyle Montgomery',
//       'Nisha Mora',
//       'Kylie Callaghan',
//       'Star Wilks',
//       'Marissa Colley',
//       'Asa Fuller',
//       'Leigh Kemp',
//       'Avleen Dawson',
//       'Sammy Bonilla',
//       'Acacia Becker',
//       'Coral Shepherd',
//       'Melina Molina',
//       'Kiran Bailey',
//       'Clara Escobar',
//       'Alexandru Horn',
//       'Brandon-Lee Mercado',
//       'Elouise Weston',
//       'King Long',
//       'Kerri Searle',
//       'Kanye Hamer',
//       'Elwood Benitez',
//       'Mikail Whitaker',
//       'Bobby Hardy',
//       'Talha Ferry',
//       'Priscilla Landry',
//       'Olivia-Grace Cain',
//       'Kiaan Wallace',
//       'Wesley Padilla90',
//       'Ella-Grace Wooten91',
//       'Kaif Molloy92',
//       'Kamal Broadhurst93',
//       'Bianca Ferrell94',
//       'Micheal Talbot95',
//     ]
//   }
//
//   return (
//     <div className="App">
//       <Tasks value={data1}/>
//       <Tasks value={data2}/>
//     </div>
//   );
// }
//
// export default App;


//--------------------------------------------------------------
// import React from 'react';
// import './App.css';
// import {Tasks} from "./Tasks";
//
// export type DataType = {
//     title: string
//     tasks: Array<TasksType>
//     students: Array<string>
// }
// export type TasksType = {
//     taskId: number
//     title: string
//     isDone: boolean
// }
//
//
// function App() {
//     const data1= {
//         title: "What to do",
//         tasks: [
//             {taskId: 1, title: "HTML&CSS2", isDone: true},
//             {taskId: 2, title: "JS2", isDone: true}
//         ],
//         students: [
//             'Jago Wormald1',
//             'Saul Milne2',
//             'Aariz Hester3',
//             'Dion Reeve4',
//             'Anisa Ortega5',
//             'Blade Cisneros6',
//             'Malaikah Phelps7',
//             'Zeeshan Gallagher8',
//             'Isobella Vo9',
//             'Rizwan Mathis10',
//             'Menaal Leach11',
//             'Kian Walton12',
//             'Orion Lamb13',
//             'Faizah Huynh14',
//             'Crystal Vaughan15',
//             'Vivien Hickman16',
//             'Stuart Lu17',
//             'Karol Davison18',
//             'Dario Burns19',
//             'Chloe Rich20',
//             'Martyna Felix',
//             'Nida Glass',
//             'Maeve Miles',
//             'Hasnain Puckett',
//             'Ayman Cano',
//             'Safwan Perry',
//             'Fox Kelly',
//             'Louise Barlow',
//             'Malaki Mcgill',
//             'Leanna Cline',
//             'Willard Hodge',
//             'Amelia Dorsey',
//             'Kiah Porter',
//             'Jeanne Daly',
//             'Mohsin Armstrong',
//             'Laurie Rangel',
//             'Princess Tierney',
//             'Kasim Kendall',
//             'Darryl Cope',
//             'Elysha Ray',
//             'Liyana Harris',
//             'Kashif Blackburn',
//             'Atif Zimmerman',
//             'Sila Hartley',
//             'Ralphie Hebert',
//         ]
//     }
//     const data2 = {
//         title: "What to learn",
//         tasks: [
//             {taskId: 1, title: "HTML&CSS", isDone: true},
//             {taskId: 2, title: "JS", isDone: true}
//         ],
//         students: [
//             'Rick Kane',
//             'Finnlay Bentley',
//             'Samia North',
//             'Isaac Morton',
//             'Lily-Ann Clifford',
//             'Thalia Park',
//             'Sapphire Cruz',
//             'Cieran Vazquez',
//             'Anya Estes',
//             'Dominika Field',
//             'Rosanna Chung',
//             'Safiyah Davey',
//             'Ryley Beasley',
//             'Kalvin Trejo',
//             'Evie-Mae Farrell',
//             'Juliet Valencia',
//             'Astrid Austin',
//             'Lyle Montgomery',
//             'Nisha Mora',
//             'Kylie Callaghan',
//             'Star Wilks',
//             'Marissa Colley',
//             'Asa Fuller',
//             'Leigh Kemp',
//             'Avleen Dawson',
//             'Sammy Bonilla',
//             'Acacia Becker',
//             'Coral Shepherd',
//             'Melina Molina',
//             'Kiran Bailey',
//             'Clara Escobar',
//             'Alexandru Horn',
//             'Brandon-Lee Mercado',
//             'Elouise Weston',
//             'King Long',
//             'Kerri Searle',
//             'Kanye Hamer',
//             'Elwood Benitez',
//             'Mikail Whitaker',
//             'Bobby Hardy',
//             'Talha Ferry',
//             'Priscilla Landry',
//             'Olivia-Grace Cain',
//             'Kiaan Wallace',
//             'Wesley Padilla90',
//             'Ella-Grace Wooten91',
//             'Kaif Molloy92',
//             'Kamal Broadhurst93',
//             'Bianca Ferrell94',
//             'Micheal Talbot95',
//         ]
//     }
//
//     return (
//         <div className="App">
//             <Tasks data={data1}/>
//             <Tasks data={data2}/>
//         </div>
//     );
// }
//
// export default App;

// import React from 'react';
// import {DataType} from "./App";
//
// type  TasksPropsType = {
//     data: DataType
// }
//
// export const Tasks = (props: TasksPropsType) => {
//     return (
//         <div>
//             <h1>{props.data.title}</h1>
//             <ul>
//                 {props.data.tasks.map(el => {
//                     return (
//                         <li>
//                             <span>{el.taskId}</span>
//                             <span>{el.title}</span>
//                             <span>{el.isDone}</span>
//                         </li>
//                     )
//                 })}
//             </ul>
//
//             <ul>
//                 {props.data.students.map(el => {
//                     return (
//                         <li>{el}</li>
//                     )
//                 })}
//             </ul>
//         </div>
//     );
// };

//--------------------------------------------------------------