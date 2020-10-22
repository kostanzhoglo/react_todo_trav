import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Dinner with wife',
        completed: true
      },
      {
        id: uuidv4(),
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,           // since these are the same, you could also write this line as "title"
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) })
  }

  render() {
    return (
      <div className="App">
        <container>
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos} 
            toggleComplete={this.toggleComplete}
            delTodo={this.delTodo}
          />
        </container>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
