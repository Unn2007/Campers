import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle.jsx";
import { selectCamperList } from "../../redux/campers/selectors.js";
import { Icon } from "../../components/Icon/Icon.jsx";
import css from "./CatalogDetails.module.css";

export const CatalogDetails = () => {
  const { id } = useParams();
  const campers = useSelector(selectCamperList);
  const camperData = campers.find((camper) => camper.id === id);
  const {
    gallery,
    name,
    price,
    rating,
    reviews,
    location,
    description,
    AC: acEquipment,
    bathroom,
    kitchen,
    TV: tvEquipment,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    transmission,
    engine,
  } = camperData;
  const reviewsNumber = reviews.length;

  return (
    <div className={`${css.container} container`}>
      <DocumentTitle>Details</DocumentTitle>
      <div className={css.camperItem}>
        <h2 className={css.header}>{name}</h2>
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
        <p className={css.price}>{`\u20AC${price}.00`}</p>
        <p className={css.description}>{`${description}`}</p>
      </div>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
