import { EquipmentItem } from "../../components/EquipmentItem/EquipmentItem.jsx";
import { capitalizeFirstLetter } from "../../utils/utils.js";
import { useId } from "react";
import { Field } from "formik";

import css from "./VehicleEquipmentList.module.css";

export const VehicleEquipmentList = ({
  items,
  className,
  classNameList,
  classNameCheckBox,
}) => {
  const checkboxes = [];
  Object.keys(items).forEach((el) => {
    if (typeof items[el] === "boolean") {
      checkboxes.push(el);
    }
  });

  return (
    <ul className={classNameList}>
      {checkboxes.map((item) => {
        const id = useId();

        return (
          <li key={item}>
            <label htmlFor={id} className={className}>
              <EquipmentItem
                name={capitalizeFirstLetter(item)}
                className={className}
                width={32}
                height={32}
                icon={`icon-${item}`}
                classNameIcon=""
              />

              <Field
                type="checkbox"
                name={item}
                id={id}
                className={classNameCheckBox}
              />
            </label>
          </li>
        );
      })}
    </ul>
  );
};
