// Import para usar o React
import React, { useState } from "react";

import Tasks from "./Components/Tasks";
import AddTask from './Components/AddTask';
import "./App.css";

const App = () => {
  const [tasks, setTasks]  = useState([
    {
      id: "1",
      title: "Estudar programção",
      complete: false,
    },
    {
      id: "2",
      title: "Ler livros",
      complete: true,
    },

  ]);

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [ 
      ... tasks,
      {
        title: taskTitle,
        id: Math.random(10),
        complete: false,
      },
    ]
    setTasks(newTasks);
  }

  return (
  <>
    <div className='container'>
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks tasks={tasks} />
    </div>
      
    </>
  );
};

export default App;
