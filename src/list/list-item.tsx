import { Button } from "../common/button";
import { Checkbox } from "../common/checkbox";
import { TodoItem } from "./definitions";

type ListItemProps = {
  item: TodoItem;
};

export const ListItem = ({ item }: ListItemProps): JSX.Element => {
  const { completed, title } = item;
  return (
    <div className="list-item">
      <div>
        <p>{title}</p>
        <p></p>
      </div>
      <div className="button-box">
        <Button onClick={() => console.log("lol")} type="blue">
          Edit
        </Button>
        <Button onClick={() => console.log("lol")} type="red">
          Delete
        </Button>
        <Checkbox onChange={() => console.log("lol")} checked={completed} />
      </div>
    </div>
  );
};
