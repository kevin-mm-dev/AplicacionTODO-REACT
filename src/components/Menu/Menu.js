import React, { useRef, useContext, useEffect } from "react";
import "./Menu.css";
// import {TodoContext} from '../../TodoContext'; 

const Menu = ({ setStateFilter,stateFilter }) => {
//   const {stateFilter,setStateFilter} =React.useContext(TodoContext);

  const All = useRef();
  const Active = useRef();
  const Completed = useRef();

  useEffect(() => {
    setTimeout(() => {
      Active.current.click();
    }, 500);
}, []);


if (stateFilter==='Active') {   
    setTimeout(() => {
    Active.current.click();
  }, 200);
  }

  const handleClick = (e) => {
    All.current.removeAttribute("active");
    Active.current.removeAttribute("active");
    Completed.current.removeAttribute("active");
    e.target.setAttribute("active", "page");
    setStateFilter(e.target.getAttribute("filter"));
  };

  return (
    <nav className="menu-nav">
      <ul className="menu-ul">
        <li className="option-menu" ref={All} filter="All" onClick={handleClick}>
          All
        </li>
        <li className="option-menu" ref={Active} filter="Active" onClick={handleClick}>
          Active
        </li>
        <li className="option-menu" ref={Completed} filter="Completed" onClick={handleClick}>
          Completed
        </li>
      </ul>
    </nav>
  );
};

export { Menu };
