import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../redux/actions";

// todo är props från förälder och toggleTodo är en action-metod
const Todo = ({ todo, toggleTodo }) => (
    // onclick skickar vidare toggleTodo för aktuell todo
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
        {todo && todo.completed ? "👌" : "👋"}{" "}
        <span
            className={cx(
                "todo-item__text",
                todo && todo.completed && "todo-item__text--completed"
            )}
        >
      {todo.content}
    </span>
    </li>
);

// tar inte emot några states från store men dispatchar toggleTodo ifall det har
// klickats på den valda todo:n, sedan exporterar den Todo komponenten med.
export default connect(null, { toggleTodo })(Todo);
