import clsx from "clsx";
import "./TextArea.css";

type TextAreaProps = {
  id: string;
  label?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  disabled?: boolean;
  errorMessage?: string;
  className?: string;
};

export function TextArea({
  id,
  label,
  value,
  onChange,
  placeholder,
  disabled = false,
  errorMessage,
  className,
}: TextAreaProps) {
  return (
    <div className="textarea-wrapper">
      {label && (
        <label htmlFor={id} className="text-area-label">
          {label}
        </label>
      )}

      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={clsx("textarea-field", className)}
      />
      {errorMessage && <p className="textarea-error">{errorMessage}</p>}
    </div>
  );
}
