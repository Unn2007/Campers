import { Icon } from "../Icon/Icon.jsx";
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
      <p>{name}</p>
    </div>
  );
};
