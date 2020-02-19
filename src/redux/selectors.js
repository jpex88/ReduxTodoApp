import { VISIBILITY_FILTERS } from "../constants";

// hämtar todos-listan från store
export const getTodosState = store => store.todos;

// Returnerar allIds-listan från store
export const getTodoList = store =>
    getTodosState(store) ? getTodosState(store).allIds : [];

// Returnerar den sökta todo:n med avseende på id
export const getTodoById = (store, id) =>
    getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

// Hämtar alla id:n från allIds (genom getTodoList) och mappar igenom denna lista
// för att plocka ut varje todo-objekt från getTodoById.
export const getTodos = store =>
    getTodoList(store).map(id => getTodoById(store, id));

// Denna funktion börjar med att hämta alla objekt från getTodos
// sedan så filtrerar den listan med avseende på filter.
export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
    const allTodos = getTodos(store);
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter(todo => todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allTodos.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
        default:
            return allTodos;
    }
};
