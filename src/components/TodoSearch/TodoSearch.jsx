import React from "react";
import {TodoContext} from '../../TodoContext'; 
import "./TodoSearch.css";



function TodoSearch() {
    // const [searchValue,setSearchValue]=React.useState();
    const {setSearchValue} =React.useContext(TodoContext);

    const onSearchValueChange=(event)=>{
        setSearchValue(event.target.value);

    };

    return (
        <div className="TodoSearch">
         <input
          className="input_search"
          placeholder = "Search"
          onChange={onSearchValueChange}
            />
            
        </div>
    );
}


export {TodoSearch}