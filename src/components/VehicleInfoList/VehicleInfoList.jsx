import {VehicleInfoItem} from "../../components/VehicleInfoItem/VehicleInfoItem.jsx";
import css from "./VehicleInfoList.module.css";

export const VehicleInfoList = ({ data }) => {
  const { form, length, width, height, tank, consumption } = data;
  const items = { form, length, width, height, tank, consumption };
  return (
    <ul>
      {Object.keys(items).map((item) => {
        return (
          <li key={item} className={css.itemWrapper}>
            <VehicleInfoItem property={item} value={items[item]}  />
          </li>
        );
      })}
    </ul>
  );
};
