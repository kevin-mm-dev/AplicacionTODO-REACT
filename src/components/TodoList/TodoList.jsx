import React from "react";
import "./TodoList.css";

function TodoList(props) {
    return (
        <section className="sectionList">
            <div className="TodoList">
                <ul>
                    {props.children}
                </ul>
            </div>
        </section>
    );
}


export {TodoList}