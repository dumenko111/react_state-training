import React, {Component} from 'react';
import Counter from './Counter';
import Dropdown from './Dropdown';
import Colorpicker from './Color';
import TodoList from './TodoList';
import todos from './TodoList/todos.json'

const ColorpickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: todos, //тут масив переданий з todos.json
  }

  deleteTodo = todoId => {//приймаємо id
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId)//ф-труємо і залишаємо всі об'єкти в масиві, в яких не співпадає id
    }))
  }

  render() {
    const { todos } = this.state;//деструктуризація для todos
    const completedTodos = todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);//ф-ція за допомогою reduce перевіряє ск в todos в completed - true
    
    return (
      <div>
      <Counter initialValue={0} />

      <Dropdown />

      <Colorpicker options={ColorpickerOptions} />

        
        <div>
          <p>Загальна к-сть: {todos.length}</p>
          <p>К-сть виконаних: {completedTodos}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />   
    </div>
    )
  }
}

export default App;
