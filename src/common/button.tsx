import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type: "green" | "blue" | "red" | "purpule";
  onClick: () => void;
  disabled?: boolean;
};

export const Button = ({
  children,
  type,
  onClick,
  disabled,
}: ButtonProps): JSX.Element => {
  return (
    <button className={`button ${type}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
