import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { register } from "../redux/operations";

const Register = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      lastName: "",
      phone: "+380",
      passwordPlus: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2)
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .min(2)
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.number().min(8),
      password: Yup.string()
        .min(6, "Password must be 6 characters long")
        .required("Required"),
    }),
    onSubmit: (values) => {
      if (values.password !== values.passwordPlus) {
        return alert("Паролі не співпадають");
      }

      // Create a copy of the form values
      const formValuesWithoutPasswordPlus = { ...values };
      delete formValuesWithoutPasswordPlus.passwordPlus;

      dispatch(register(formValuesWithoutPasswordPlus));

      alert("Перейдіть на вашу електрону пошту щоб підтвердити реєстрацію");
    },
  });
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          width: "500px",

          flexDirection: "column",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Реєстрація</h2>
        <label htmlFor="name">
          <p style={{ fontWeight: "700" }}>
            Ім`я <span style={{ color: "red" }}>*</span>
          </p>
        </label>
        <TextField
          name="name"
          id="name"
          variant="outlined"
          placeholder="Ім'я"
          type="text"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.name}
          sx={{ backgroundColor: "#fff" }}
        />
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}
        <label htmlFor="lastName">
          <p style={{ fontWeight: "700" }}>
            Прізвище <span style={{ color: "red" }}>*</span>
          </p>
        </label>
        <TextField
          name="lastName"
          id="lastName"
          variant="outlined"
          placeholder="Прізвище"
          type="text"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.lastName}
          sx={{ backgroundColor: "#fff" }}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div style={{ color: "red" }}>{formik.errors.lastName}</div>
        ) : null}
        <label htmlFor="email">
          <p style={{ fontWeight: "700" }}>
            E-mail <span style={{ color: "red" }}>*</span>
          </p>
        </label>
        <TextField
          name="email"
          id="email"
          variant="outlined"
          placeholder="email@example.com"
          type="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          sx={{ backgroundColor: "#fff" }}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}
        <label htmlFor="phone">
          <p style={{ fontWeight: "700" }}>Номер телефону</p>
        </label>
        <TextField
          name="phone"
          id="phone"
          variant="outlined"
          placeholder="+380000000"
          type="tel"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.phone}
          sx={{ backgroundColor: "#fff" }}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div style={{ color: "red" }}>{formik.errors.phone}</div>
        ) : null}
        <label htmlFor="password">
          <p style={{ fontWeight: "700" }}>
            Пароль <span style={{ color: "red" }}>*</span>
          </p>
        </label>
        <TextField
          name="password"
          id="password"
          variant="outlined"
          placeholder="Пароль"
          type="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          sx={{ backgroundColor: "#fff" }}
        />
        {formik.touched.password && formik.errors.password ? (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        ) : null}
        <label htmlFor="passwordPlus">
          <p style={{ fontWeight: "700" }}>
            Підтвердження пароль <span style={{ color: "red" }}>*</span>
          </p>
        </label>

        <TextField
          name="passwordPlus"
          id="passwordPlus"
          variant="outlined"
          placeholder="Підтвердження пароль"
          type="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.passwordPlus}
          sx={{ backgroundColor: "#fff" }}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "#FFC700",
            borderRadius: "4px",
            mt: "20px",
            padding: "10px",
          }}
        >
          Зареєструватися
        </Button>
        <p style={{ marginTop: "20px", fontWeight: "700" }}>
          Вже є акаунт?
          <Link to="/" style={{ color: "#C99A00", marginLeft: "10px" }}>
            Вхід
          </Link>
        </p>
      </form>
    </>
  );
};

export default Register;
