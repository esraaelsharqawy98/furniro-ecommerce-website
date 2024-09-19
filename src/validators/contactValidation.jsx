import * as yup from "yup";

const contactValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required("this field is required")
    .min(3, "name must at least 3 characters")
    .matches(
      /^[a-zA-Z_ ]+$/,
      "name can only include letters , spaces and underscores."
    )
    .max(20, "name cannot exceed 20 characters"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("this field is required"),
  subject: yup.string().max(100, "subject cannot exceed 100 characters."),
  message: yup
    .string()
    .required("this field is required")
    .min(3, "message must at least 3 characters")
    .max(250, "message cannot exceed 250 characters"),
});

export default contactValidationSchema;
