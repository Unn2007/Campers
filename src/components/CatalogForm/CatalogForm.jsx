import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from 'react-redux';
import {setFilters} from '../../redux/filters/slice.js';
import {setPage} from '../../redux/campers/slice.js'
import css from './CatalogForm.module.css';
// import * as Yup from "yup";


// const FeedbackSchema = Yup.object().shape({
//   location: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
// });

// function removeFalsyValues(obj) {
//     return Object.fromEntries(
//       Object.entries(obj).filter(([key, value]) => Boolean(value))
//     );
//   }

//   function renameProperties(obj, renames) {
//     return Object.fromEntries(
//       Object.entries(obj).map(([key, value]) => [
//         renames[key] || key, 
//         value,
//       ])
//     );
//   }
const initialValues = {
  location: "",
  ac: false,
  bathroom: false,
  kitchen: false,
  tv: false,
  radio: false,
  refrigerator: false,
  microwave: false,
  gas: false,
  water: false,

  vehicleType:""
};

export const CatalogForm = () => {
   
  const locationFieldId = useId();
  const acId = useId();
  const bathroomId = useId();
  const kitchenId = useId();
  const tvId = useId();
  const radioId = useId();
  const refrigeratorId = useId();
  const microwaveId = useId();
  const gasId = useId();
  const waterId = useId();
  const alcoveId = useId();
  const vanId = useId();
  const fullyIntId = useId();
  const panelTruck = useId();
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
      dispatch(setPage(1));
     dispatch(setFilters(values));
  
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    //   validationSchema={FeedbackSchema}
    >
      <Form>
        <div>
          <label htmlFor={locationFieldId}>Location</label>
          <Field type="text" name="location" id={locationFieldId} />
          {/* <ErrorMessage name="location" component="span" /> */}
        </div>
        <div>
          <label htmlFor={acId}>AC</label>
          <Field type="checkbox" name="ac" id={acId}  />
          <label htmlFor={bathroomId}>Bathroom</label>
          <Field type="checkbox" name="bathroom" id={bathroomId}  />
          <label htmlFor={kitchenId}>kitchen</label>
          <Field type="checkbox" name="kitchen" id={kitchenId}  />
          <label htmlFor={radioId}>radio</label>
          <Field type="checkbox" name="radio" id={radioId}  />
          <label htmlFor={refrigeratorId}>refrigerator</label>
          <Field type="checkbox" name="refrigerator" id={refrigeratorId}  />
          <label htmlFor={microwaveId}>microwave</label>
          <Field type="checkbox" name="microwave" id={microwaveId}  />
          <label htmlFor={gasId}>gas</label>
          <Field type="checkbox" name="gas" id={gasId}  />
          <label htmlFor={tvId}>tv</label>
          <Field type="checkbox" name="tv" id={tvId}  />
          <label htmlFor={waterId}>water</label>
          <Field type="checkbox" name="water" id={waterId}  />
          
        </div>
        <div>
          <label htmlFor={alcoveId}>Alcove</label>
          <Field type="radio" name="vehicleType" id={alcoveId} value="alcove" />
          <label htmlFor={vanId}>Van</label>
          <Field type="radio" name="vehicleType" id={vanId} value="van" />
          <label htmlFor={fullyIntId}>Fully Integrated</label>
          <Field type="radio" name="vehicleType" id={fullyIntId} value="fullyIntegrated" />
          <label htmlFor={panelTruck}>Panel Truck</label>
          <Field type="radio" name="vehicleType" id={panelTruck} value="panelTruck" />
        </div>
        
        

      
        <button type="submit" className={css.button}>Submit</button>
      </Form>
    </Formik>
  );
};
