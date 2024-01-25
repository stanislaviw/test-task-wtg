type ChexboxProps = {
  checked: boolean;
  onChange: () => void;
};

export const Checkbox = ({ checked, onChange }: ChexboxProps): JSX.Element => {
  return (
    <div
      role="button"
      onClick={onChange}
      className={`checkbox ${checked && "checkbox-checked"}`}
    ></div>
  );
};
