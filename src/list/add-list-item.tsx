import { useState } from "react";
import { Button } from "../common/button";
import { v4 as uuidv4 } from "uuid";
import { DatePicker } from "@mui/x-date-pickers";
import { format as dateFormat, parseISO } from "date-fns";
import { TodoItem } from "./definitions";

type AddListItemProps = {
  addTodo: (item: TodoItem) => void;
};

export const AddListItem = ({ addTodo }: AddListItemProps): JSX.Element => {
  const [text, setText] = useState<string>("");
  const [date, setDate] = useState<string | null>(null);

  const handleClickButton = (value: string, date: string | null): void => {
    const newId = uuidv4();

    const newTodo: TodoItem = {
      id: newId,
      title: value,
      completed: false,
      date: date ? date : "",
    };

    addTodo(newTodo);

    setText("");
    setDate(null);
  };

  const handleChangeDate = (value): void => {
    const date = value.format();

    const formettedDate = date ? dateFormat(parseISO(date), "yyyy-MM-dd") : "";

    setDate(formettedDate);
  };

  return (
    <div className="add-list-item">
      <input
        className="input"
        placeholder="Enter your todo here"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <DatePicker value={date} onChange={handleChangeDate} />
      <Button
        onClick={() => handleClickButton(text, date)}
        type="green"
        disabled={!text}
      >
        Add new
      </Button>
    </div>
  );
};
