import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "../common/button";
import { Checkbox } from "../common/checkbox";
import { TodoItem } from "./definitions";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

type ListItemProps = {
  item: TodoItem;
  removeTodo: (id: string) => void;
  completedToggle: (id: string) => void;
  setTodos: Dispatch<SetStateAction<TodoItem[]>>;
};

export const ListItem = ({
  item,
  removeTodo,
  completedToggle,
  setTodos,
}: ListItemProps): JSX.Element => {
  const [text, setText] = useState<string>("");
  const [newDate, setNewDate] = useState<Date | null>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const { completed, title, id, date } = item;

  useEffect(() => {
    const newDate: Date | null = date ? dayjs(date).toDate() : null;
    setNewDate(newDate);
    setText(title);
  }, [date, title]);

  const handleClickSave = (): void => {
    setTodos((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          const formattedDate: string = newDate
            ? dayjs(newDate).format("YYYY-MM-DD")
            : "";

          const newItem: TodoItem = {
            ...item,
            date: formattedDate,
            title: text,
          };

          return newItem;
        }

        return item;
      })
    );

    setIsEdit(false);
  };

  return (
    <div className="list-item">
      {isEdit ? (
        <>
          <div className="edit-box">
            <input
              className="input edit-input"
              placeholder="Enter your todo here"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <DatePicker
              value={newDate}
              onChange={(value: Date | null) => setNewDate(value)}
            />
          </div>
          <Button onClick={handleClickSave} type="green">
            Save
          </Button>
        </>
      ) : (
        <>
          <div>
            <p>{title}</p>
            <p>{date ? date : "Without date"}</p>
          </div>
          <div className="button-box">
            <Button onClick={() => setIsEdit(true)} type="blue">
              Edit
            </Button>
            <Button onClick={() => removeTodo(id)} type="red">
              Delete
            </Button>
            <Checkbox
              onChange={() => completedToggle(id)}
              checked={completed}
            />
          </div>
        </>
      )}
    </div>
  );
};
