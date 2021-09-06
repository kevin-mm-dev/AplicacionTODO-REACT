import React from "react";
import "./CreateTodoButton.css";


function CreateTodoButton(props) {
    let classBtn='CreateTodoButton ToClose';
    const onClickButton=()=>{
        props.setOpenModal(prevState=> !prevState);
    }
    if (props.openModal) {
        classBtn='CreateTodoButton ToClose';
    }else{
        classBtn='CreateTodoButton ToOpen';
    }
    
    return (
        <button
      className={classBtn}
      onClick={onClickButton}
    >
      +
    </button>
    ); 
}


export {CreateTodoButton}