// import { useState } from "react";
import { Button } from "../common/button";
import { Checkbox } from "../common/checkbox";
import { TodoItem } from "./definitions";

type ListItemProps = {
  item: TodoItem;
  removeTodo: (id: string) => void;
  completedToggle: (id: string) => void;
};

export const ListItem = ({
  item,
  removeTodo,
  completedToggle,
}: ListItemProps): JSX.Element => {
  // const [isEdit, setIsEdit] = useState<boolean>(false);

  const { completed, title, id } = item;

  return (
    <div className="list-item">
      <p>{title}</p>
      <div className="button-box">
        <Button onClick={() => console.log("lol")} type="blue">
          Edit
        </Button>
        <Button onClick={() => removeTodo(id)} type="red">
          Delete
        </Button>
        <Checkbox onChange={() => completedToggle(id)} checked={completed} />
      </div>
    </div>
  );
};
