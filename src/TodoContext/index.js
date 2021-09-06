import React from 'react';
import { useLocalStorage } from "./useLocalStorage";

const TodoContext =React.createContext();

const TodoProvider = (props) => {

  const [searchValue, setSearchValue] = React.useState("");
  const {
    item:todos,
    saveItem:saveTodos,
    loading,
    error
  } = useLocalStorage("TODOS_V1", []);
  
  const [openModal, setOpenModal] = React.useState(false);
  const [stateFilter,setStateFilter] = React.useState("Active");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const getFilter = (id) => {
    if (id === "All") {
      return todos.filter((todo) => {
        return todo.text.toLowerCase().includes(searchValue.toLowerCase());
      });
    } else if (id === "Active") {
      const newFilter = todos.filter((todo) => todo.completed === false);
      return newFilter.filter((filter) =>
      filter.text.toLowerCase().includes(searchValue.toLowerCase())
      );
    } else if (id === "Completed") {
      const newFilter = todos.filter((todo) => todo.completed === true);
      return newFilter.filter((filter) =>
        filter.text.toLowerCase().includes(searchValue.toLowerCase())
      );
    } else {
      return null;
    }
  };

  //Filtros
  const filterTodos = getFilter("All");
  const filterActive = getFilter("Active");
  const filterCompleted = getFilter("Completed");
    
    
    
      const completeTodo=(text)=>{
        const index = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
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
        setStateFilter("Active");
        
      };
      const deleteTodo=(text)=>{
        const index=todos.findIndex(to=>to.text===text);
        const newTodos=[...todos];
        newTodos[index].eliminated=true;
        newTodos.splice(index,1);
        saveTodos(newTodos);
      };
     
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            stateFilter,
            setStateFilter,
            completedTodos,
            searchValue,
            setSearchValue,
            completeTodo,
            addTodo,
            setEliminatedTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            getFilter,
            filterTodos,
            filterActive,
            filterCompleted,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}


export {TodoContext,TodoProvider};