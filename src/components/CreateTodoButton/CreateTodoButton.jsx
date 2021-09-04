import React from "react";
import add from '../img/add.svg'; 
import "./CreateTodoButton.css";


function CreateTodoButton() {
    const onClickButton=()=>{
        alert('Estas agregando una tarea');
    }

    
    return (
        <div className="div_add">
            <button className="btn_add"
                onClick={()=>onClickButton("Deja de precionar el boton")}
            >
                <img alt="btn_add_img" className="btn_add_img" src={add} />
            </button> 
        </div>
    ); 
}


export {CreateTodoButton}