import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import css from "./BookingForm.module.css";

const DateField = ({ field, form, ...props }) => {
  return (
      <DatePicker
          {...field}
          {...props}
          selected={(field.value && new Date(field.value)) || null}
          onChange={(val) => form.setFieldValue(field.name, val)}
          className={css.customDatepicker} 
          calendarClassName={"customCalendar"}
      />
  );
};

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  message: Yup.string().min(3, "Too short").max(256, "Too long"),
  date: Yup.date()
    .required("Required")
    .min(new Date(), "Date must be  in future"),
});

const initialValues = {
  username: "",
  email: "",
  message: "",
  date: "",
};

export const BookingForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const dateFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <div className={css.formContainer}>
        <div className={css.fieldContainer}>
          <label htmlFor={nameFieldId} className={css.label}>Name*</label>
          <Field type="text" name="username" id={nameFieldId} className={css.fieldInput} />
          <ErrorMessage name="username" component="span" className={css.error} />
        </div>

        <div className={css.fieldContainer}>
          <label htmlFor={emailFieldId} className={css.label}>Email*</label>
          <Field type="email" name="email" id={emailFieldId} className={css.fieldInput} />
          <ErrorMessage name="email" component="span" className={css.error} />
        </div>
        <div className={css.fieldContainer}>
          <label htmlFor={dateFieldId} className={css.label}>Booking date*</label>
          <Field name="date" id={dateFieldId} className={css.fieldInput} component={DateField} />
          <ErrorMessage name="date" component="span" className={css.error} />
        </div>

        <div className={css.fieldContainer}>
          <label htmlFor={msgFieldId} className={css.label}>Comment</label>
          <Field as="textarea" name="message" id={msgFieldId} rows="5" className={css.fieldInput} />
          <ErrorMessage name="message" component="span" className={css.error} />
        </div>

        <button type="submit" className={css.button}>Submit</button>
        </div>
      </Form>
    </Formik>
  );
};
