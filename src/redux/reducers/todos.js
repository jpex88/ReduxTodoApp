import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

// Initierar states:en i store för todo:sen (lista med allIds och objekten med all todos byIds)
const initialState = {
    allIds: [],
    byIds: {}
};

// reducer funktionen som agerar på alla actions som dispatchas
// states initieras enligt ovan och sedan tas även den dispatchade action:en in
// states kommer sedan vara det aktuella/"gamla" state:et med sakerna i store
export default function(state = initialState, action) {
    //switch-case på vilken typ av action som dispatchas.
    switch (action.type) {
        // på add_todo-actionen så tas payloaden emot med
        // contentet som skickats som en dispatch genom action.addTodo-funktionen (där ett id autogenererats)
        case ADD_TODO: {
            const { id, content } = action.payload;
            // Här concat:ar den nya todo:n till det nuvarande state:et/todoslistan
            // för både allIds samt i objektlistan med content och en initiering av
            // att todo:n ej är utförd (completed: false)
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false
                    }
                }
            };
        }
        case TOGGLE_TODO: {
            // I Todo.js när en todo klickas på så dispatchas todo:n genom actions.toggleTodo(todo.id)
            // där action sätts till TOGGLE_TODO och skickar med todo-id hit som payload
            const { id } = action.payload;
            // Här uppdateras den valda todo:ns completed-state till false
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        completed: !state.byIds[id].completed
                    }
                }
            };
        }
        default:
            return state;
    }
}
