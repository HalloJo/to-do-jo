import React, { useState } from "react";
import { Todo } from "../App";

type TodoItemProps = {
  todo: Todo;
  formattedDate: (date: number) => string;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
};

const TodoItem = ({
  todo,
  formattedDate,
  toggleComplete,
  deleteTodo,
  editTodo,
}: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [text, setText] = useState<string>(todo.text);

  const handleEdit = () => {
    if (text.trim() !== "") {
      editTodo(todo.id, text);
      setIsEditing(false);
    }
  };

  return (
    <li key={todo.id} className="flex justify-between items-center">
      {isEditing ? (
        <input
          value={text}
          onChange={(event) => setText(event.target.value)}
          onKeyDown={(event) => event.key === "Enter" && handleEdit()}
          autoFocus
          className="flex-1 border px-2 py-1 rounded"
        />
      ) : (
        <div>
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
        </div>
      )}

      <div>
        {isEditing ? (
          <button
            className="bg-gray-500 p-2 rounded-xl cursor-pointer"
            onClick={handleEdit}
          >
            💾
          </button>
        ) : (
          <button
            className="bg-gray-500 p-2 rounded-xl cursor-pointer"
            onClick={() => setIsEditing(true)}
          >
            ✏️
          </button>
        )}
        <button
          className={` p-2 rounded-xl cursor-pointer ${
            todo.completed ? "bg-amber-400" : "bg-green-500"
          }`}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.completed ? "Uncomplete" : "✅"}
        </button>
        <button
          className="bg-red-500 p-2 rounded-xl cursor-pointer"
          onClick={() => deleteTodo(todo.id)}
        >
          ⚔
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
