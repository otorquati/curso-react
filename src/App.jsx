// Importação de bibliotecas para usar o React
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Importação de Componentes Criados
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from './Components/AddTask';
import TaskDetails from './Components/TaskDetails';

// Importação de Estilos
import "./App.css";

// Componente principal do aplicativo
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

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed};
      return task;
    })
    setTasks(newTasks);
    }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
        ...tasks,
      {
        title: taskTitle,
        id: Math.random(10),
        complete: false,
      },
    ];
    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  return (
      <Router>
          <div className='container'>
              <Header />
              <Routes>              
                  <Route 
                      path="/" 
                     //exact 
                      render = {() => (
                    <>
                              <AddTask handleTaskAddition={handleTaskAddition} />
                              <Tasks
                                tasks={tasks}
                                handleTaskClick={handleTaskClick}
                                handleTaskDeletion={handleTaskDeletion}
                              />
                              </>
                          )}
                    />
                    <Route path="/:taskTitle" exact companent={TaskDetails}/>
              </Routes> 
          </div>
     </Router>
  );
};

export default App;
