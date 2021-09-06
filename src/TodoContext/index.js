import React from 'react';
import { useLocalStorage } from "./useLocalStorage";

const TodoContext =React.createContext();

function TodoProvider(props) {

    const {
        item:todos,
        saveItem:saveTodos,
        loading,
        error
      }=useLocalStorage('TODOS_V1', []);

      
      const [searchValue,setSearchValue]=React.useState('');
      const [openModal,setOpenModal]=React.useState(false);
      
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
    
      const setEliminatedTodo=(text)=>{
          const index=todos.findIndex(to=>to.text===text);
          const newTodos=[...todos];
          newTodos[index].eliminated=true;
          saveTodos(newTodos);
        };
      const addTodo=(text)=>{
        const newTodos=[...todos];
        newTodos.push({
          completed:false,
          eliminated:false,
          text:text
        });
        saveTodos(newTodos);
      };
      const deleteTodo=(text)=>{
        const index=todos.findIndex(to=>to.text===text);
        const newTodos=[...todos];
        newTodos[index].eliminated=true;
        newTodos.splice(index,1);
        saveTodos(newTodos);
        // setTimeout(()=>{
        //   saveTodos(newTodos);
        // },1000);
      };
     
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            searchedTodos,
            setSearchValue,
            completeTodo,
            addTodo,
            setEliminatedTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}


export {TodoContext,TodoProvider};