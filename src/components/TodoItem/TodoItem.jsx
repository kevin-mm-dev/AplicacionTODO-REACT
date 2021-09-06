import React from "react";
import circle from '../img/circle.svg'; 
import dele from '../img/dele.svg'; 
import cheque from '../img/cheque.svg'; 
import './TodoItem.css'

function TodoItem(props) {
    
    let classCircle = 'circle';
    let classCheque = 'cheque animate__animated animate__jello animate__fast';
    let classText="";
    let classField="task";
    if (props.completed) {
        classCircle = 'showOff';
        classCheque = 'cheque animate__animated animate__jello animate__fast';
        classText="line-through";
    }else{
        classCheque = ' showOff';
        classCircle = 'circle';
    }

    if (props.eliminated) {
        classField+='  animate__animated animate__backOutDown animate__fast';
    }
    const onDel=()=>{
        props.setEliminatedTodo();
        setTimeout(() => {
            props.onDelete();
        }, 300);
    };
    return (
        <li className={classField}>
            {/* <img className={`circle ${props.completed && 'showOff'}` } src={circle}  /> */}
            <img alt="circle" onClick={props.onComplete}  className={classCircle } src={circle}  />
            <img alt="cheque" onClick={props.onComplete}  className={classCheque} src={cheque} />
            <div className="divP">
            <p className={classText}>{props.text}</p>

            </div>
            <div className="divDele"><img alt="delete" onClick={onDel} className="dele" src={dele} /></div>
        </li>
    );
}


export {TodoItem}