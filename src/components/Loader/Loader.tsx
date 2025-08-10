import "./Loader.css";
import clsx from "clsx";

type LoaderProps = {
  size?: "small" | "medium" | "large";
};

export function Loader({ size = "medium" }: LoaderProps) {
  return (
    <>
      <div className={clsx("loader", size && `loader-${size}`)}></div>
    </>
  );
}
