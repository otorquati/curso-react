import React from 'react';
import Button from './Button';
import { useParams } from 'react-router-dom';

import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  return ( 
    <>
      <div className="back-button-container">
        <Button>Voltar</Button>
      </div>
      <div className="task-details-container">
        <p>{params.taskTitle}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ipsum quis nesciunt suscipit neque nisi.</p>
      </div>
    </>
   );
};
 
export default TaskDetails
