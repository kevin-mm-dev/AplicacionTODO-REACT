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
import { Menu } from "../components/Menu/Menu";


function AppUI() {
    const {
        error,
        loading,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        setEliminatedTodo,
        filterTodos,
        filterActive,
        filterCompleted,
        stateFilter,
        setStateFilter,
    }= React.useContext(TodoContext)
    // const [stateFilter, setStateFilter] = React.useState("Active");
    // setStateFilter("Active");
    return ( 
        <React.Fragment>
            <TodoCounter/>
            <Menu setStateFilter={setStateFilter} stateFilter={stateFilter}/>

            <TodoSearch/>
                <TodoList> 
                    {error && <p className='txt_instruction'>Ups! Hubo un error con la carga</p> }
                    {loading && <BlockLoading/> }
                    {stateFilter === "Active"
                        ? 
                        (filterActive.length===0 && !loading?
                            <p className='txt_instruction'>Ready, start your taks list!!!</p> :
                                filterActive.map((item, i) => (
                                    <TodoItem
                                    key={i}
                                    {...item}
                                    setEliminatedTodo={() =>setEliminatedTodo(item.text)}
                                    onComplete={() => completeTodo(item.text)}
                                    onDelete={() => deleteTodo(item.text)}
                                    />
                            ))
                        )

                        : stateFilter === "All"
                        ? 
                        (filterTodos.length===0 && !loading?
                            <p className='txt_instruction'>Ready, start your taks list!!!</p> : 
                        filterTodos.map((item, i) => (
                            <TodoItem
                                key={i}
                                {...item}
                                setEliminatedTodo={() =>setEliminatedTodo(item.text)}
                                onComplete={() => completeTodo(item.text)}
                                onDelete={() => deleteTodo(item.text)}
                            />
                            ))
                        )

                        : 
                        (filterCompleted.length===0 && !loading?
                            <p className='txt_instruction'>You haven't finished any task yet:(</p> : 
                            filterCompleted.map((item, i) => (
                            <TodoItem
                                key={i}
                                {...item}
                                setEliminatedTodo={() =>setEliminatedTodo(item.text)}
                                onComplete={() => completeTodo(item.text)}
                                onDelete={() => deleteTodo(item.text)}
                            />
                        ))
                        )
                        }
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