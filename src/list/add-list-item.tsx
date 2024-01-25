import { useState } from "react";
import { Button } from "../common/button";
import { v4 as uuidv4 } from "uuid";
import { DatePicker } from "@mui/x-date-pickers";
import { TodoItem } from "./definitions";
import dayjs from "dayjs";

type AddListItemProps = {
  addTodo: (item: TodoItem) => void;
};

export const AddListItem = ({ addTodo }: AddListItemProps): JSX.Element => {
  const [text, setText] = useState<string>("");
  const [date, setDate] = useState<Date | null>(null);

  const handleClickButton = (value: string, dateValue: Date | null): void => {
    const newId: string = uuidv4();

    const formattedDate: string = date
      ? dayjs(dateValue).format("YYYY-MM-DD")
      : "";

    const newTodo: TodoItem = {
      id: newId,
      title: value,
      completed: false,
      date: formattedDate,
    };

    addTodo(newTodo);
    setText("");
    setDate(null);
  };

  return (
    <div className="add-list-item">
      <input
        className="input"
        placeholder="Enter your todo here"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <DatePicker value={date} onChange={(value) => setDate(value)} />
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
