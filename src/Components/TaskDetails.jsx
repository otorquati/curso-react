import React from 'react';
import Button from './Button';
import { useNavigate, useParams } from "react-router-dom";

import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const history = useNavigate();
  const handleBackButtonClick = () => {
    history(-1);
  }
  //console.log(params)
  return ( 
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ipsum quis nesciunt suscipit neque nisi.</p>
      </div>
    </>
   );
};
 
export default TaskDetails;
