import clsx from "clsx";
import "./InputText.css";

type InputTextProps = {
  id?: string;
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  value: string;
  errorMassage?: string;
  disable?: boolean;
};

export function InputText({
  id,
  label,
  onChange,
  placeholder,
  type = "text",
  value,
  errorMassage,
  disable,
}: InputTextProps) {
  const hasError = !!errorMassage;

  return (
    <>
      <div className="input=text-wrapper">
        {label && id && (
          <label htmlFor={id} className="input-text-label">
            {label}
          </label>
        )}

        <input
          id={id}
          className={clsx("text", { "input-text-error": hasError })}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          disabled={disable}
        />
        {hasError && (
          <span className="input-text-error-message">{errorMassage}</span>
        )}
      </div>
    </>
  );
}
