import React, { useState } from "react";
import { Formik } from "formik";
import "./App.css";

function App() {
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleValidate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }else if (!REGEX.email.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.phone) {
  errors.phone = "Required";
} else if (!/^[0-9]{10}$/.test(values.phone)) {
  errors.phone = "Phone must be 10 digits";
}

    return errors;
  };

  const handleSubmit = () => {
    alert("Add contact !!!")
  };

  return (
    <div className="App">
      <h1>Contact form</h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
        >
          {({values, errors, handleSubmit}) => (
            <form onSubmit={handleSubmit}>
              <div className={`custom-input ${errors.name ? "custom-input-error" : ""}`}>
                <label htmlFor="name">Name</label>
                <input 
                  type="text"
                  name="name"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                {errors.name && <div className="error-message">{errors.name}</div>}
              </div>

               <div
              className={`custom-input ${
                errors.email ? "custom-input-error" : ""
              }`}
            >
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                value={values.email || ""}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div
              className={`custom-input ${
                errors.phone ? "custom-input-error" : ""
              }`}
            >
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                value={values.phone || ""}
                onChange={handleChange}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
