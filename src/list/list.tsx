import { useEffect, useState } from "react";
import { AddListItem } from "./add-list-item";
import { ListItem } from "./list-item";
import { TodoItem } from "./definitions";
import { DATA } from "./data";

export const List = (): JSX.Element => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  console.log(todos);

  useEffect(() => {
    // it's like
    setTodos(DATA);
  }, []);

  const removeTodo = (id: string) => {
    setTodos((prevState) => prevState.filter((item) => id !== item.id));
  };

  const addTodo = (item: TodoItem) => {
    setTodos((prevState) => [item, ...prevState]);
  };

  const completedToggle = (id: string) => {
    setTodos((prevState) =>
      prevState.map((item) => {
        if (id === item.id) {
          const newItem = {
            ...item,
            completed: !item.completed,
          };
          return newItem;
        }
        return item;
      })
    );
  };

  return (
    <div className="list">
      <AddListItem addTodo={addTodo} />
      <div className="list-items">
        {todos.length === 0 ? (
          <span className="placeholder">No any tasks</span>
        ) : (
          todos.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              removeTodo={removeTodo}
              completedToggle={completedToggle}
            />
          ))
        )}
      </div>
    </div>
  );
};
