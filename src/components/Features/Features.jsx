import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EquipmentList } from "../../components/EquipmentList/EquipmentList.jsx";
import { selectCamperList } from "../../redux/campers/selectors.js";
import { VehicleInfoList } from "../../components/VehicleInfoList/VehicleInfoList.jsx";
import css from "./Features.module.css";

export const Features = () => {
  const { id } = useParams();
  const campers = useSelector(selectCamperList);
  const camperData = campers.find((camper) => camper.id === id);

  return (
    <>
      <div className={css.equipments}>
        <EquipmentList
          item={camperData}
          className={css.equipment}
          classNameIcon={css.equipmentIcon}
          classNameList={css.equipmentList}
        />
      </div>
      <div className={css.vehicleInfo}>
        <h3 className={css.header}>Vehicle details</h3>
        <VehicleInfoList data={camperData} />
      </div>
    </>
  );
};
