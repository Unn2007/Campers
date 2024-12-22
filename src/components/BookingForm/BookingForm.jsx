import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./BookingForm.module.css";

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
        <div>
          <label htmlFor={nameFieldId} className={css.label}>Name*</label>
          <Field type="text" name="username" id={nameFieldId} />
          <ErrorMessage name="username" component="span" />
        </div>

        <div>
          <label htmlFor={emailFieldId} className={css.label}>Email*</label>
          <Field type="email" name="email" id={emailFieldId} />
          <ErrorMessage name="email" component="span" />
        </div>
        <div>
          <label htmlFor={dateFieldId} className={css.label}>Дата:</label>
          <Field type="date" name="date" id={dateFieldId} />
          <ErrorMessage name="date" component="span" />
        </div>

        <div>
          <label htmlFor={msgFieldId} className={css.label}>Comment</label>
          <Field as="textarea" name="message" id={msgFieldId} rows="5" />
          <ErrorMessage name="message" component="span" />
        </div>

        <button type="submit" className={css.button}>Submit</button>
      </Form>
    </Formik>
  );
};
