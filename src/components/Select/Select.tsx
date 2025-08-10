import { clsx } from "clsx";
import "./Select.css";

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  id: string;
  label?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: Option[];
  disable?: boolean;
  errorMessage?: string;
  className?: string;
};

export function Select({
  id,
  label,
  value,
  onChange,
  options,
  disable = false,
  errorMessage,
  className,
}: SelectProps) {
  return (
    <div className="select-wrapper">
      {label && (
        <label htmlFor={id} className="select-label">
          {label}
        </label>
      )}

      <select
        id={id}
        value={value}
        onChange={onChange}
        disabled={disable}
        className={clsx("select-field", className)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errorMessage && <p className="select-error">{errorMessage}</p>}
    </div>
  );
}
