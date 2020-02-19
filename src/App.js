import React from 'react';
import './App.css';
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import VisibilityFilters from "./Components/VisibilityFilters";

// Komponenterna håller på alla saker själv med tar in data från store
// via mapStateToProps och dispatchar en action genom att skicka och kalla
// på önskad action creator, i actions.js, (som tar den önskade contentet/id/string/vad som önskas)
// som gör om det till en korrekt action med type och payload till reducersena.
// Flöde Komponent håller på funktioner etc, när en action vill göras som t ex en onClick
// så till kallas en action creator från actions.js för att dispatcha den önskade ändringen
// vilket skickas till reducerna där datat i store:en påverkas/ändras till önskat state.
function App() {
  return (
      // Framsidan som pekar på de olika komponenterna till Todo-listan
      <div className="todo-app">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
        <VisibilityFilters />
      </div>
  );
}

export default App;
