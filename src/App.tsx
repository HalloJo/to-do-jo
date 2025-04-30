import { useState } from "react";
import TodoItem from "./components/TodoItem";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const App = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = () => {
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const formattedDate = (date: number) => {
    return new Date(date).toLocaleString("nl-NL");
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <main className=" bg-black h-screen w-screen py-16 flex flex-col justify-start items-center text-white">
      <div className="max-w-1/2 w-full flex flex-col gap-4">
        <h1 className="text-6xl text-white font-bold">✅ To Do</h1>
        <div className="flex flex-row gap-2">
          <input
            type="text"
            value={newTodo}
            placeholder="Write your todo.."
            onChange={(event) => setNewTodo(event?.target.value)}
            onKeyDown={(event) => event.key === "Enter" && handleAdd()}
            className="bg-white text-black w-ful rounded-xl w-full px-3"
          />
          <button className="bg-purple-500 p-3 rounded-xl" onClick={handleAdd}>
            Add
          </button>
        </div>
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              formattedDate={formattedDate}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default App;
