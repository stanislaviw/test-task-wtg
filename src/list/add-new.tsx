import { Button } from "../common/button";

export const AddListItem = (): JSX.Element => {
  return (
    <div>
      <Button onClick={() => console.log("lol")} type="green">
        Add new
      </Button>
    </div>
  );
};
