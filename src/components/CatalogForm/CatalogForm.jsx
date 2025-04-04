import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/filters/slice.js";
import { setPage, clearItems } from "../../redux/campers/slice.js";
import { Icon } from "../../components/Icon/Icon.jsx";
import { VehicleEquipmentList } from "../../components/VehicleEquipmentList/VehicleEquipmentList.jsx";
import { FormVariantsList } from "../../components/FormVariantsList/FormVariantsList.jsx";
import css from "./CatalogForm.module.css";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  location: Yup.string().matches(
    /^[A-Z][a-zA-Z\s]+,\s[A-Z][a-zA-Z\s]+$/,
    "Location must be in the format 'Country, City'"
  ),
});

const initialValues = {
  location: "",
  aC: false,
  bathroom: false,
  kitchen: false,
  tV: false,
  radio: false,
  refrigerator: false,
  microwave: false,
  gas: false,
  water: false,
  vehicleType: "",
};

export const CatalogForm = () => {
  const locationFieldId = useId();

  const alcoveId = useId();
  const vanId = useId();
  const fullyIntId = useId();
  const panelTruck = useId();
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(clearItems());
    dispatch(setPage(1));
    dispatch(setFilters(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <div className={css.location}>
          <label htmlFor={locationFieldId} className={css.locationLabel}>
            <p className={css.locationHeader}>Location</p>
            <div className={css.locationWrapper}>
              <Icon width={20} height={20} href="icon-map"></Icon>
              <Field
                type="text"
                name="location"
                id={locationFieldId}
                className={css.locationField}
              />
              <ErrorMessage
                name="location"
                component="span"
                className={css.error}
              />
            </div>
          </label>
        </div>
        <p className={css.filters}>Filters</p>

        <div className={css.filtersContainer}>
          <h3 className={css.filtersHeader}>Vehicle equipment</h3>
          <VehicleEquipmentList
            items={initialValues}
            className={css.equipmentLabel}
            classNameList={css.filterWrapper}
            classNameCheckBox={css.checkbox}
          />
        </div>
        <div className={css.formContainer}>
          <h3 className={css.filtersHeader}>Vehicle type</h3>
          <div className={css.filterWrapper}>
            <FormVariantsList
              items={["alcove", "van", "fullyIntegrated"]}
              className={css.equipmentLabel}
              classNameList={css.filterWrapper}
              classNameCheckBox={css.checkbox}
            />
          </div>
        </div>
        <div className={css.buttonContainer}>
          <button type="submit" className={css.button}>
            Search
          </button>
          <button type="reset" className={css.button}>
            Clear
          </button>
        </div>
      </Form>
    </Formik>
  );
};

{
  /* <div className={css.filterWrapper}>
<label htmlFor={acId} className={css.equipmentLabel}>
  <Icon width={32} height={32} href="icon-aC"></Icon>
  <p>AC</p>
  <Field
    type="checkbox"
    name="ac"
    id={acId}
    className={css.checkbox}
  />
</label>

<label htmlFor={bathroomId} className={css.equipmentLabel}>
  <Icon width={32} height={32} href="icon-bathroom"></Icon>
  <p>Bathroom</p>
  <Field
    type="checkbox"
    name="bathroom"
    id={bathroomId}
    className={css.checkbox}
  />
</label>

<label htmlFor={kitchenId} className={css.equipmentLabel}>
  <Icon width={32} height={32} href="icon-kitchen"></Icon>
  <p>Kitchen</p>
  <Field
    type="checkbox"
    name="kitchen"
    id={kitchenId}
    className={css.checkbox}
  />
</label>

<label htmlFor={radioId} className={css.equipmentLabel}>
  <Icon width={32} height={32} href="icon-radio"></Icon>
  <p>Radio</p>
  <Field
    type="checkbox"
    name="radio"
    id={radioId}
    className={css.checkbox}
  />
</label>

<label htmlFor={refrigeratorId} className={css.equipmentLabel}>
  <Icon width={32} height={32} href="icon-refrigerator"></Icon>
  <p>Refrigerator</p>
  <Field
    type="checkbox"
    name="refrigerator"
    id={refrigeratorId}
    className={css.checkbox}
  />
</label>

<label htmlFor={microwaveId} className={css.equipmentLabel}>
  <Icon width={32} height={32} href="icon-microwave"></Icon>
  <p>Microwave</p>
  <Field
    type="checkbox"
    name="microwave"
    id={microwaveId}
    className={css.checkbox}
  />
</label>

<label htmlFor={gasId} className={css.equipmentLabel}>
  <Icon width={32} height={32} href="icon-gas"></Icon>
  <p>Gas</p>
  <Field
    type="checkbox"
    name="gas"
    id={gasId}
    className={css.checkbox}
  />
</label>

<label htmlFor={tvId} className={css.equipmentLabel}>
  <Icon width={32} height={32} href="icon-tV"></Icon>
  <p>TV</p>
  <Field
    type="checkbox"
    name="tv"
    id={tvId}
    className={css.checkbox}
  />
</label>

<label htmlFor={waterId} className={css.equipmentLabel}>
  <Icon width={32} height={32} href="icon-water"></Icon>
  <p>Water</p>
  <Field
    type="checkbox"
    name="water"
    id={waterId}
    className={css.checkbox}
  />
</label>
</div> */
}

{
  /* <label htmlFor={alcoveId} className={css.equipmentLabel}>
              <Icon width={32} height={32} href="icon-alcove"></Icon>
              <p>Alcove</p>
              <Field
                type="radio"
                name="vehicleType"
                id={alcoveId}
                value="alcove"
                className={css.checkbox}
              />
            </label>

            <label htmlFor={vanId} className={css.equipmentLabel}>
              <Icon width={32} height={32} href="icon-van"></Icon>
              <p>Van</p>
              <Field
                type="radio"
                name="vehicleType"
                id={vanId}
                value="van"
                className={css.checkbox}
              />
            </label>

            <label htmlFor={fullyIntId} className={css.equipmentLabel}>
              <Icon width={32} height={32} href="icon-fullyIntegrated"></Icon>
              <p className={css.text}>Fully Integrated</p>
              <Field
                type="radio"
                name="vehicleType"
                id={fullyIntId}
                value="fullyIntegrated"
                className={css.checkbox}
              />
            </label> */
}
