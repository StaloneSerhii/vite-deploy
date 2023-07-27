import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "../redux/operations";

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(logIn(values));
      values.preventDefault();
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
        <h2 style={{ textAlign: "center" }}>Авторизація</h2>
        <label htmlFor="email">
          <p style={{ fontWeight: "700" }}>E-mail</p>
        </label>
        <TextField
          name="email"
          id="email"
          variant="outlined"
          placeholder="email@example.com"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          sx={{ backgroundColor: "#fff" }}
        />
        <label htmlFor="password">
          <p style={{ fontWeight: "700" }}>Пароль</p>
        </label>
        <TextField
          name="password"
          id="password"
          variant="outlined"
          placeholder="Пароль"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
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
          Увійти
        </Button>
        <p style={{ marginTop: "20px", fontWeight: "700" }}>
          Ще не зареєстровані?{" "}
          <Link to="/register" style={{ color: "#C99A00" }}>
            Зареєструватися
          </Link>
        </p>
      </form>
    </>
  );
};

export default Login;
