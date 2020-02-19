import React from "react";
import { connect } from 'react-redux';
import { addTodo } from "../redux/actions";

class AddTodo extends React.Component {
    state = { input: "" };

    updateInput = input => {
        this.setState({ input });
    };

    // metod som dispatchar nya att-göra grejen (action) och addar till store:en
    handleAddTodo = () => {
        // dispatches actions to add todo
        this.props.addTodo(this.state.input);
        // sets state back to empty string
        this.setState({ input: "" });
    };

    render() {
        return (
            <div>
                <input
                    onChange={e => this.updateInput(e.target.value)}
                    value={this.state.input}
                />
                <button className="add-todo" onClick={this.handleAddTodo}>
                    Add Todo
                </button>
            </div>
        );
    }
}

// Tar inte emot några states från store men dispatchar den nytillagda
// todo:n till appen. Exporterar även komponenten.
export default connect(null,{addTodo})(AddTodo);
