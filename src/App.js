import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./componenets/TodoInput";
import TodoList from "./componenets/TodoList";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
