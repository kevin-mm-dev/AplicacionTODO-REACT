import React from "react";
import "./TodoCounter.css";
import logo from '../img/coronas.svg'; 



function TodoCounter({total,completed}) {
    return (
        <div className="TodoCounter">
            <img alt="logo" className="logo" src={logo} />
            <h1 className="title">
              What´s Up
            </h1>
            <p className="sub_title"> 
           
                Completado  <b>{completed}</b> /
            
              {total} TODOs
            </p>

        </div>
        // <img src={urlIcon}/>
    );
}


export {TodoCounter}