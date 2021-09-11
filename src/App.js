import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Clarus Todos</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
