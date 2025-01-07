import css from "./GalleryList.module.css";
import { GalleryItem } from "../GalleryItem/GalleryItem";

export const GalleryList = ({ gallery }) => {
  return (
    <ul className={css.list}>
      {gallery.map((galleryItem) => {
        return (
          <li key={galleryItem.thumb}>
            <GalleryItem url={galleryItem.thumb} />
          </li>
        );
      })}
    </ul>
  );
};
