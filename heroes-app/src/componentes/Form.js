import React from 'react';
import { useFormik } from 'formik';

const validateFields = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8) {
        errors.password = 'To Short Password';
    }
    // Agregar control de comillas y de inyeccion sql. 
    return errors;
};

const SignupForm = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: validateFields,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            // post con email y password. Despues insertar jwt y renderizar la barra.

        },
    });
    return (
        <div className="login-box">
            <h2>Login</h2>
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
                    {formik.touched.email && formik.errors.email ? <div className="email-form-error">{formik.errors.email}</div> : null}
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
                    {formik.touched.password && formik.errors.password ? <div className="email-form-error">{formik.errors.password}</div> : null}
                </div>
                <input type="submit" value="Enviar"></input>
                <div className="email-form-response">
                    <p>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;