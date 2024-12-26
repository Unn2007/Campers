import { RatingList } from "../../components/RatingList/RatingList.jsx";
import css from "./ReviewsItem.module.css";
import { capitalizeFirstLetter, getFirstLetter } from "../../utils/utils.js";

export const ReviewsItem = ({ name, text, rating }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.comentatorInfo}>
        <h2 className={css.avatar}>
          {capitalizeFirstLetter(getFirstLetter(name))}
        </h2>
        <div>
          <p className={css.name}>{capitalizeFirstLetter(name)}</p>
          <RatingList rating={rating} />
        </div>
      </div>
      <p className={css.text}>{text}</p>
    </div>
  );
};
