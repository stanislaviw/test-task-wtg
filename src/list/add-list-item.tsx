import { useState } from "react";
import { Button } from "../common/button";
import { TodoItem } from "../definitions";

type AddListItemProps = {
  addTodoToState: (item: TodoItem) => void;
};

export const AddListItem = ({
  addTodoToState,
}: AddListItemProps): JSX.Element => {
  const [text, setText] = useState<string>("");

  // const createTodo = async (todo) => {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos",
  //       {
  //         method: "POST",
  //         body: JSON.stringify(todo),
  //         headers: {
  //           "Content-type": "application/json; charset=UTF-8",
  //         },
  //       }
  //     );
  //     // const newTodo = await response.json();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="add-list-item">
      <input
        className="input"
        placeholder="Enter your todo here"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <Button
        onClick={() =>
          addTodoToState({
            id: 1,
            userId: 10,
            title: text,
            completed: false,
          })
        }
        type="green"
        disabled={!text}
      >
        Add new
      </Button>
    </div>
  );
};
