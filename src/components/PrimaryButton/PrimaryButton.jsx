import css from "./PrimaryButton.module.css";

export default function PrimaryButton({
  children,
  type = "button",
  handleClick,
}) {
  return (
    <button
      className={css.button}
      type={type}
      onClick={() => {
        handleClick();
      }}
    >
      {children}
    </button>
  );
}
