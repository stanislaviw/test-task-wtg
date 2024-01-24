import { useEffect, useState } from "react";
import { AddListItem } from "./add-new";
import { ListItem } from "./list-item";
import { TodoItem } from "./definitions";

export const List = (): JSX.Element => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  console.log(todos);

  return (
    <div className="list">
      <AddListItem />
      <div className="list-items">
        {todos.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
