import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId = 0;

// Här är alla action creators

// addTodo skapar action:en add todo. Den tar emot content från AddTodo.js och
// skapar sedan en action med action.type och payload innehållandes id och content
export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
});

// toggleTodo skapar action:en att complete:a en todo. Den tar emot en todo:s id från Todo.js och
// skapar sedan en action med action.type och payload innehållandes endast id
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
});

// setFilter skapar action:en att filtrera todolistan. Den tar emot en enkel string-variabel från VisibilityFilters.js och
// skapar sedan en action med action.type och payload innehållandes vilket typ av filter
export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
