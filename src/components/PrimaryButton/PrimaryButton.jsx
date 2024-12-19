import css from './PrimaryButton.module.css'

export default function PrimaryButton({ children, type="button" }) {
    return (
      <button className={css.button} type={type} >{children}</button>
    );
  }