import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type: "green" | "blue" | "red" | "purpule";
  onClick: () => void;
};

export const Button = ({
  children,
  type,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {children}
    </button>
  );
};
