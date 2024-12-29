import css from "./EquipmentList.module.css";
import { EquipmentItem } from "../../components/EquipmentItem/EquipmentItem.jsx";
import { capitalizeFirstLetter } from "../../utils/utils.js";

export const EquipmentList = ({
  item,
  className,
  classNameIcon,
  classNameList,
}) => {
  const equipments = (({
    bathroom,
    kitchen,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    transmission,
    engine,
    AC: aC,
    TV: tV,
  }) => ({
    aC,
    bathroom,
    kitchen,
    tV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    transmission,
    engine,
  }))(item);

  const equipmentsKeys = Object.keys(equipments);
  return (
    <ul className={classNameList}>
      {equipmentsKeys.map((item) => {
        let nameEqipment =
          typeof equipments[item] !== "boolean" ? equipments[item] : item;

        return (
          !!equipments[item] && (
            <li key={item}>
              <EquipmentItem
                name={capitalizeFirstLetter(nameEqipment)}
                className={className}
                width={20}
                height={20}
                icon={`icon-${item}`}
                classNameIcon={classNameIcon}
              />
            </li>
          )
        );
      })}
    </ul>
  );
};
