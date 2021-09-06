import React from 'react';
import { TodoContext } from '../../TodoContext';
import pin from '../img/alfiler.svg';
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue,setNewTodoValue]=React.useState('');
    const phrases=[
    'Eat cookies',
    'Bathe my cat',
    'Buy  food  to  my  doggy',
    'Paint my house',
    'Draw something',
    'Turn off the light',
    'Flush the toilet',
    'Breathe'
];

    const {
        addTodo,
        setOpenModal
    }=React.useContext(TodoContext);


    const onChange=(event)=>{
        setNewTodoValue(event.target.value);
    };

    const onCancel=()=>{
        setOpenModal(false);
    };

    

    const onSubmit=(event)=>{
        event.preventDefault();
        if (newTodoValue!=='') {
            addTodo(newTodoValue);
            setOpenModal(false);
        };
    }

    return(
        <form className='form' onSubmit={onSubmit}>
            <div className='header_modal'>
                <label className='title_modal'>New task</label>
                <img className='img_pin' alt='img_pin' src={pin}/>
            </div>
            <textarea  
            className='text'
            value={newTodoValue}
            onChange={onChange}
            placeholder={phrases[Math.floor(Math.random() * (phrases.length))]} />
            <div className='div_btns'>
                <button
                    type='button'
                className='btn btn_cancel'
                    onClick={onCancel}>
                    Cancel
                </button>
                
                <button
                className='btn btn_save'
                type='submit'>
                    Save
                </button>
            </div>
        </form>
    );
}

export {TodoForm};