import './App.css';
import React from 'react';
import {TodoItem} from './components/TodoItem/TodoItem.jsx';
import {TodoCounter} from './components/TodoCounter/TodoCounter.jsx';
import {TodoList} from './components/TodoList/TodoList.jsx';
import {TodoSearch} from './components/TodoSearch/TodoSearch.jsx';
import {CreateTodoButton} from './components/CreateTodoButton/CreateTodoButton.jsx';
import { useLocalStorage } from "./customHooks/useLocalStorage";

const defaultTodos = [
    { text: 'Tarea 1 test', completed: true },
    { text: 'Comer', completed: false },
    { text: 'Acabar polizas', completed: false },
    { text: 'Subir repo', completed: false },
]



function App() {
  const [todos,saveTodos]=useLocalStorage('TODOS_V1',defaultTodos);
  const [searchValue,setSearchValue]=React.useState('');
  
  //  defaultTodos=todos.filter(to=> to.text==searchValue).length;
  const completedTodos=todos.filter(to=> !!to.completed).length;
  const totalTodos=todos.length;
  
  let searchedTodos=[];
  if (!searchValue.length>=1) {
    searchedTodos=todos;
  }else{
    searchedTodos=todos.filter(todo=>{
      const todoText=todo.text.toLowerCase();
      const searchText=searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }




  const completeTodo=(text)=>{
    const index=todos.findIndex(to=>to.text===text);
    const newTodos=[...todos];
    newTodos[index].completed=true;
    saveTodos(newTodos);
  };
  const deleteTodo=(text)=>{
    const index=todos.findIndex(to=>to.text===text);
    const newTodos=[...todos];
    newTodos.splice(index,1);
    saveTodos(newTodos);
  };


    return ( 
    <React.Fragment>
        <TodoCounter
          total={totalTodos}
          completed={completedTodos}
        />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        <TodoList> 
          {searchedTodos.map((item, index)=>(
            <TodoItem key={item.text}  text={item.text} completed={item.completed} onComplete={()=>completeTodo(item.text)} onDelete={()=>deleteTodo(item.text)}/>
        ))}
        </TodoList>
        <CreateTodoButton/>

      </React.Fragment >

    );
}

export default App;