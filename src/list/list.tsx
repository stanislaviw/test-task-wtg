import { useEffect, useState } from "react";
import { AddListItem } from "./add-list-item";
import { ListItem } from "./list-item";
import { TodoItem } from "../definitions";

export const List = (): JSX.Element => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  const removeTodoFromState = (id: number) => {
    setTodos((prevState) => prevState.filter((item) => id !== item.id));
  };

  const addTodoToState = (item: TodoItem) => {
    setTodos((prevState) => [item, ...prevState]);
  };

  return (
    <div className="list">
      <AddListItem addTodoToState={addTodoToState} />
      <div className="list-items">
        {todos.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            removeTodoFromState={removeTodoFromState}
          />
        ))}
      </div>
    </div>
  );
};
