import React from 'react';
import {TodoItem} from '../components/TodoItem/TodoItem.jsx';
import {TodoCounter} from '../components/TodoCounter/TodoCounter.jsx';
import {TodoList} from '../components/TodoList/TodoList.jsx';
import {TodoSearch} from '../components/TodoSearch/TodoSearch.jsx';
import {CreateTodoButton} from '../components/CreateTodoButton/CreateTodoButton.jsx';
import {TodoContext} from '../TodoContext';
import {Modal} from '../components/Modal/ModalToCreate';
import {TodoForm} from '../components/TodoFrom';
import {BlockLoading} from '../components/Loading/BlockLoading';


function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        setEliminatedTodo,
    }= React.useContext(TodoContext)

    return ( 
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
                <TodoList> 
                    {error && <p className='txt_instruction'>Ups! Hubo un error con la carga</p> }
                    {loading && <BlockLoading/> }
                    {(!loading && !searchedTodos.length ) && <p className='txt_instruction'>Ready, start your taks list!!!</p> }

                    {searchedTodos.map((item, index)=>(
                        <TodoItem key={item.text}   text={item.text} completed={item.completed} eliminated={item.eliminated} onComplete={()=>completeTodo(item.text)} onDelete={()=>deleteTodo(item.text)}  setEliminatedTodo={()=>setEliminatedTodo(item.text)}/>
                    ))}
                </TodoList>

                
                {!!openModal && (
                    <Modal>
                        <TodoForm/>
                    </Modal>
                )}

            <CreateTodoButton
                setOpenModal={setOpenModal} openModal={openModal}
             />
        </React.Fragment >
    );
  }

export {AppUI}; 