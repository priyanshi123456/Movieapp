import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";

const Loginpage = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    if (
      values.email === "priyanshi@gmail.com" &&
      values.password === "moviedb"
    ) {
      navigate("./homepage");
    }
    else{
      alert("incorrect password")
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <div className="pt-9">
          <h1 className="text-white text-3xl">Login Form</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-white pt-9">Email:</label>
                  <Field type="email" name="email" className="form-control mt-2  w-[500px]" />
                  <ErrorMessage name="email" className="text-red-600"/>
                </div>
                <div >
                  <label htmlFor="password" className="text-white pt-9">Password:</label>
                  <Field
                    type="password"
                    name="password"
                    className="form-control w-[500px]"
                  />
                  <span className="bg-white"> <ErrorMessage name="password"/></span>
                 
                </div>
                <button type="submit" className="btn btn-primary btn mt-9 ml-[200px]">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Loginpage;
