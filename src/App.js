// Import para usar o React
import React, { useState } from "react";

import Tasks from "./Components/Tasks";
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
    {
      id: "2",
      title: "Ler livros",
      complete: true,
    },
    {
      id: "2",
      title: "Ler livros",
      complete: true,
    },
    {
      id: "2",
      title: "Ler livros",
      complete: true,
    },
  ]);

  return (
  <>
    <div className='container'>
      <Tasks tasks={tasks} />
    </div>
      
    </>
  );
};

export default App;
