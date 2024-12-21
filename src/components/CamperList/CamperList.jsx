import { useSelector } from "react-redux";
import { selectCamperList } from "../../redux/campers/selectors.js";
import { CamperItem } from "../CamperItem/CamperItem.jsx";
import css from "./CamperList.module.css";

export const CamperList = () => {
  const camperItems = useSelector(selectCamperList);

  return (
    <ul className={css.camperList}>
      {camperItems.map((item) => {
        return (
          <li key={item.id}>
            <CamperItem data={item} />
          </li>
        );
      })}
    </ul>
  );
};
