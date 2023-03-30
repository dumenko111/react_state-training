import './TodoList.css'

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className="TodoList">
    <h2>To do List</h2>
    {todos.map(({ id, text }) => (
      <li key={id} className="TodoList__item">
        <p className="TodoList__text">{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Видалити</button>   
      </li>
    ))}
  </ul>)

export default TodoList;