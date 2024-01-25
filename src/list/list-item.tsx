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

  const { completed, title, id, date } = item;

  return (
    <div className="list-item">
      <div>
        <p>{title}</p>
        <p>{date ? date : "Without date"}</p>
      </div>
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
