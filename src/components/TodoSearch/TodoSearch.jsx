import React from "react";
import "./TodoSearch.css";

function TodoSearch({searchValue,setSearchValue}) {
    // const [searchValue,setSearchValue]=React.useState();

    const onSearchValueChange=(event)=>{
        console.log(event.target.value);
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