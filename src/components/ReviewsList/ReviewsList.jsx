import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCamperList } from "../../redux/campers/selectors.js";
import css from "./ReviewsList.module.css";
import { ReviewsItem } from "../../components/ReviewsItem/ReviewsItem.jsx";

export const ReviewsList = () => {
  const { id } = useParams();
  const campers = useSelector(selectCamperList);
  const camperData = campers.find((camper) => camper.id === id);
  const reviews = camperData.reviews;
  return (
    <ul className={css.list}>
      {reviews.map((review, index) => {
        return (
          <li key={index}>
            <ReviewsItem
              name={review.reviewer_name}
              text={review.comment}
              rating={review.reviewer_rating}
            />
          </li>
        );
      })}
    </ul>
  );
};
