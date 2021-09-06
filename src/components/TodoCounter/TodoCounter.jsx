import React from "react";
import logo from '../img/coronas.svg'; 
import "./TodoCounter.css";
import {TodoContext} from '../../TodoContext'; 



function TodoCounter() {
  const {totalTodos,completedTodos} =React.useContext(TodoContext);

    return (
        <div className="TodoCounter">
            <img alt="logo" className="logo" src={logo} />
            <h1 className="title">
              What´s Up
            </h1>
            <p className="sub_title"> 
           
                Completed  <b>{completedTodos}</b> /
            
              {totalTodos} TODOs
            </p>

        </div>
    );
}


export {TodoCounter}