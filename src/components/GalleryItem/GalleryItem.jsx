import css from "./GalleryItem.module.css";

export const GalleryItem = ({ url }) => {
  return <img src={url} alt="campers foto" className={css.image} />;
};
