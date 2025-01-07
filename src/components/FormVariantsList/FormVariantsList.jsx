import { EquipmentItem } from "../../components/EquipmentItem/EquipmentItem.jsx";
import { capitalizeFirstLetter } from "../../utils/utils.js";
import { useId } from "react";
import { Field } from "formik";

export const FormVariantsList = ({
  items,
  className,
  classNameList,
  classNameCheckBox,
}) => {
  return (
    <ul className={classNameList}>
      {items.map((item) => {
        const id = useId();
        const itemName =
          item === "fullyIntegrated"
            ? "Fully Integrated"
            : capitalizeFirstLetter(item);
        const itemValue = item === "van" ? "panelTruck" : item;

        return (
          <li key={item}>
            <label htmlFor={id} className={className}>
              <EquipmentItem
                name={itemName}
                className={className}
                width={32}
                height={32}
                icon={`icon-${item}`}
                classNameIcon=""
              />

              <Field
                type="radio"
                name="vehicleType"
                id={id}
                value={itemValue}
                className={classNameCheckBox}
              />
            </label>
          </li>
        );
      })}
    </ul>
  );
};
