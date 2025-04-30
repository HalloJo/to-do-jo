import React from "react";
import { Todo } from "../App";

type TodoItemProps = {
  todo: Todo;
  formattedDate: (date: number) => string;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoItem = ({
  todo,
  formattedDate,
  toggleComplete,
  deleteTodo,
}: TodoItemProps) => {
  return (
    <li key={todo.id} className="flex justify-between items-center">
      <p
        className={`font-bold ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {todo.text}
      </p>
      <p
        className={`text-gray-300 ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {formattedDate(todo.id)}
      </p>
      <div>
        <button
          className={` p-2 rounded-xl cursor-pointer ${
            todo.completed ? "bg-amber-400" : "bg-green-500"
          }`}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.completed ? "Uncomplete" : "Complete"}
        </button>
        <button
          className="bg-red-500 p-2 rounded-xl cursor-pointer"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
