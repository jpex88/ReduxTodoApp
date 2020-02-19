import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../redux/selectors";

const TodoList = ({ todos }) => (
    // kollar att det finns todos och att länden är större än 0 för mappning isf så kör den Todo.js per todo i storen
    <ul className="todo-list">
        {todos && todos.length
            ? todos.map((todo, index) => {
                return <Todo key={`todo-${todo.id}`} todo={todo} />;
            })
            : "No todos, yay!"}
    </ul>
);

// Mappar alla states till props in i komponenten genom
// att hämta vilket filter-state som är aktivt från store
// och sedan filtrera todos-listan på visibilityfiltret
const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return { todos };
};
// Tar emot den valda filtrerade listan av todos från store
// men dispatchar inget vidare. exporterar även todolist komponenten.
// Här ser vi att vi har filtreringsmetoden i selcetors där vi filtrerar listan todos
// från store innan vi använder den i TodoList-classen samtidigt som vi inte skickar iväg
// en uppdatering av filtreringen till store genom någon dispatch. Detta medför att datat
// i todos i store ej påverkas av filtreringen utan endast vad som mappas upp visuellt av
// DOM:en.
export default connect(mapStateToProps)(TodoList);
