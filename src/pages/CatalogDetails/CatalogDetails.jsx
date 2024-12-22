import { Suspense } from "react";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle.jsx";
import { useNavigate } from "react-router-dom";
import { selectCamperList } from "../../redux/campers/selectors.js";
import { Icon } from "../../components/Icon/Icon.jsx";
import { GalleryList } from "../../components/GalleryList/GalleryList.jsx";
import {BookingForm} from '../../components/BookingForm/BookingForm.jsx'

import css from "./CatalogDetails.module.css";

export const CatalogDetails = () => {
  const navigate = useNavigate();
  const locationUrl = useLocation();
  const lastPathSegment = locationUrl.pathname.split("/").pop();
  const isFeatures = lastPathSegment === "features";
  const isReviews = lastPathSegment === "reviews";
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
  useEffect(() => {
    navigate("features");
  }, []);

  return (
    <div className={`${css.container} container`}>
      <DocumentTitle>Details</DocumentTitle>

      <section className={css.mainInfo}>
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
        <div className={css.gallery}>
          <GalleryList gallery={gallery} />
        </div>
        <p className={css.description}>{`${description}`}</p>
      </section>
      <section className={css.details}>
        <ul className={css.linkList}>
          <li className={`${css.linkListItem} ${isFeatures && css.active}`}>
            <Link to="features">Features</Link>
          </li>
          <li className={`${css.linkListItem} ${isReviews && css.active}`}>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <div className={css.wrapper}>
          <div className={css.techDetails}>
            <Suspense fallback={<div>Loading subpage...</div>}>
              <Outlet />
            </Suspense>
          </div>
          <div className={css.form}>
            <h3 className={css.formHeader}>Book your campervan now</h3>
            <p className={css.formText} >Stay connected! We are always ready to help you.</p>
            <BookingForm/>
          </div>
        </div>
      </section>
    </div>
  );
};
