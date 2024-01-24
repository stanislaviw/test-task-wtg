import { Button } from "../common/button";
import { Checkbox } from "../common/checkbox";
import { TodoItem } from "../definitions";

type ListItemProps = {
  item: TodoItem;
  removeTodoFromState: (id: number) => void;
};

export const ListItem = ({
  item,
  removeTodoFromState,
}: ListItemProps): JSX.Element => {
  const { completed, title, id } = item;

  const deleteTodo = async (todoId: number) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        removeTodoFromState(todoId);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="list-item">
      <p>{title}</p>
      <div className="button-box">
        <Button onClick={() => console.log("lol")} type="blue">
          Edit
        </Button>
        <Button onClick={() => deleteTodo(id)} type="red">
          Delete
        </Button>
        <Checkbox onChange={() => console.log("lol")} checked={completed} />
      </div>
    </div>
  );
};
