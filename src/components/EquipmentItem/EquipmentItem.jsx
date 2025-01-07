import { Icon } from "../Icon/Icon.jsx";
import css from "./EquipmentItem.module.css";

export const EquipmentItem = ({
  name,
  className,
  width,
  height,
  icon,
  classNameIcon,
}) => {
  return (
    <div className={className}>
      <Icon
        width={width}
        height={height}
        href={icon}
        className={classNameIcon}
      />
      <p className={css.name}>{name}</p>
    </div>
  );
};
