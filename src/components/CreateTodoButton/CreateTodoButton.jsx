import React from "react";
import add from '../img/add.svg'; 
import "./CreateTodoButton.css";


function CreateTodoButton(props) {
    let classImg='btn_add_img';
    let classBtn='CreateTodoButton ToClose';
    const onClickButton=()=>{
        props.setOpenModal(prevState=> !prevState);
    }
    
    if (props.openModal) {
        classImg='btn_add_img rotate';
    }else{
        classImg='btn_add_img';
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
        // <div className="div_add">
        //     <button className="btn_add"
        //         onClick={()=>onClickButton("Deja de precionar el boton")}
        //     >
        //         <img className={classImg} alt="btn_add_img" src={add} />
        //     </button> 
        // </div>
    ); 
}


export {CreateTodoButton}