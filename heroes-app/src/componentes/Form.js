import React, { useEffect } from "react";
import { useFormik } from "formik";
import useUser from "../hooks/useUser";
import { useHistory } from "react-router";

const validateFields = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const SignupForm = () => {
  const { isLogged, login, loading, error } = useUser();
  let history = useHistory();

  const handleRedirect = (route) => {
    history.push(route);
  };

  useEffect(() => {
    const controlLogin = () => (isLogged ? handleRedirect("/equipo") : null);
    controlLogin();
  }, [isLogged]);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validateFields,
    onSubmit: (values) => {
      login({ email: values.email, password: values.password });
      console.log(isLogged);
      if (isLogged) {
        handleRedirect("/equipo");
      }
    },
  });
  return (
    <div className="login-box">
      <h2>Login</h2>
      {loading && <strong>Cargando ... </strong>}
      {!loading && (
        <form className="email-form" onSubmit={formik.handleSubmit}>
          <div className="user-box">
            <label>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="email-form"
              placeholder="Ingresa tu email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              required
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="email-form-error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="user-box">
            <label>Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="email-form"
              placeholder="Ingresa tu password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              required
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="email-form-error">{formik.errors.password}</div>
            ) : null}
          </div>
          <input type="submit" value="Enviar"></input>
          <div className="email-form-response"></div>
        </form>
      )}
      {error && <strong>Credenciales invalidas. Pruebe con otras</strong>}
    </div>
  );
};

export default SignupForm;
