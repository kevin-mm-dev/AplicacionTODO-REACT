import React from "react";
import circle from '../img/circle.svg'; 
import dele from '../img/dele.svg'; 
import cheque from '../img/cheque.svg'; 
import './TodoItem.css'

function TodoItem(props) {
    
    let classCircle = 'circle';
    let classCheque = 'cheque animate__animated animate__jello animate__fast';
    let classText="";
    let classField="";
    if (props.completed) {
        classCircle += ' showOff';
        classText="line-through";
    }else{
        classCheque += ' showOff';
    }
    // const onDelete=()=>{
    //     alert("Se ha borrado el TODO "+props.text )
    // };
    return (
        <li className={classField}>
            {/* <img className={`circle ${props.completed && 'showOff'}` } src={circle}  /> */}
            <img alt="circle" onClick={props.onComplete}  className={classCircle } src={circle}  />
            <img alt="cheque" className={classCheque} src={cheque} />
            <div className="divP">
            <p className={classText}>{props.text}</p>

            </div>
            <div className="divDele"><img alt="delete" onClick={props.onDelete} className="dele" src={dele} /></div>
        </li>
    );
}


export {TodoItem}