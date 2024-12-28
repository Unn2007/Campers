import { Icon } from "../../components/Icon/Icon.jsx";
import PrimaryButton from "../PrimaryButton/PrimaryButton.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite, unSetFavorite } from "../../redux/campers/slice.js";
import { selectIsFavorite } from "../../redux/campers/selectors.js";
import { EquipmentList } from "../../components/EquipmentList/EquipmentList.jsx";
import css from "./CamperItem.module.css";

export const CamperItem = ({ data }) => {
  const {
    id,
    gallery,
    name,
    price,
    rating,
    reviews,
    location,
    description,
    
  } = data;
  const favoriteCampers = useSelector(selectIsFavorite);
  let isFavorite = favoriteCampers.includes(id);
  const imageLink = gallery[0].thumb;
  const reviewsNumber = reviews.length;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const buttonClick = () => {
    navigate(`${id}`);
  };
  const heartClick = () => {
    if (!isFavorite) {
      dispatch(setFavorite(id));
    } else {
      dispatch(unSetFavorite(id));
    }
  };
  return (
    <div className={css.camperItem}>
      <img className={css.image} alt="campers foto" src={imageLink} />
      <div className={css.camperData}>
        <div className={css.camperHeader}>
          <h2 className={css.header}>{name}</h2>
          <p className={css.price}>{`${(+price).toFixed(2)}`}</p>
          <button
            className={css.buttonHeart}
            type="button"
            onClick={() => {
              heartClick();
            }}
          >
            <Icon
              width={26}
              height={24}
              href="icon-heart"
              className="iconheart"
              style={isFavorite ? { fill: "rgba(216, 67, 67, 1)" } : undefined}
            />
          </button>
        </div>
        <div className={css.reviewsLocation}>
          <Icon
            width={16}
            height={16}
            href="icon-star"
            className={css.iconStar}
          />
          <p className={css.rating}>{`${rating}(${reviewsNumber} Reviews)`}</p>
          <Icon
            width={16}
            height={16}
            href="icon-map"
            className={css.iconMap}
          />
          <p>{`${location}`}</p>
        </div>
        <p className={css.description}>{`${description}`}</p>
        <EquipmentList
            item={data}
            className={css.equipment}
            classNameIcon={css.equipmentIcon}
            classNameList={css.equipmentList}
          />
        

        <PrimaryButton handleClick={buttonClick}>Show more</PrimaryButton>
      </div>
    </div>
  );
};
