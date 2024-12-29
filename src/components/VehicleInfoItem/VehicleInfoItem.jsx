import { capitalizeFirstLetter } from "../../utils/utils.js";
import css from "./VehicleInfoItem.module.css";

export const VehicleInfoItem = ({ property, value, className = "" }) => {
  return (
    <p className={css.item}>
      <span>{`${capitalizeFirstLetter(property)}`}</span>
      <span>{`${value}`}</span>
    </p>
  );
};
