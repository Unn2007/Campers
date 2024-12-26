import { Icon } from "../Icon/Icon.jsx";
import css from "./RatingList.module.css";

export const RatingList = ({ rating }) => {
  const liItem = [];
  liItem.length = rating;
  liItem.fill(1);

  return (
    <ul className={css.name}>
      {liItem.map((val, index) => {
        return (
          <li key={index}>
            <Icon width={16} height={16} href="icon-star" />
          </li>
        );
      })}
    </ul>
  );
};
