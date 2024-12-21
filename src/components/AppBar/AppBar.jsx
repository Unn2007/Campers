import { Navigation } from "../Navigation/Navigation";
import { Icon } from "../../components/Icon/Icon.jsx";
import css from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <header className={css.header}>
      <div className={`${css.container} container`}>
      <Icon width={136} height={16} href="icon-logo" className="iconLogo" />
      <Navigation />
      </div>
    </header>
  );
};
