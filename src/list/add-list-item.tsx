import { useState } from "react";
import { Button } from "../common/button";
import { TodoItem } from "./definitions";
import { v4 as uuidv4 } from "uuid";

type AddListItemProps = {
  addTodo: (item: TodoItem) => void;
};

export const AddListItem = ({ addTodo }: AddListItemProps): JSX.Element => {
  const [text, setText] = useState<string>("");

  const handleClickButton = (): void => {
    const newId = uuidv4();

    setText("");
    addTodo({
      id: newId,
      title: text,
      completed: false,
    });
  };

  return (
    <div className="add-list-item">
      <input
        className="input"
        placeholder="Enter your todo here"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <Button onClick={handleClickButton} type="green" disabled={!text}>
        Add new
      </Button>
    </div>
  );
};
