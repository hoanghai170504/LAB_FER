import React from "react";
import { Mail, Phone } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactPage = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string()
      .matches(
        /^(0(3[2-9]|5[6-9]|7[0-9]|8[1-9]|9[0-9]))\d{7}$/,
        "Invalid phone number (Must be a valid Vietnamese number)"
      )
      .required("Required"),
    message: Yup.string().required("Required"),
  });

  return (
    <>
      <div className="flex flex-col items-center p-8">
        <h2 className="text-4xl font-bold text-green-600 mb-4">
          📩 Contact Us
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center border mb-6">
          <p className="flex items-center justify-center text-gray-700 text-lg">
            <Mail className="text-blue-500 mr-2" /> example@email.com
          </p>
          <p className="flex items-center justify-center text-gray-700 text-lg mt-2">
            <Phone className="text-blue-500 mr-2" /> +123 456 789
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md border">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Send Us a Message
          </h3>
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Field
                    name="name"
                    className="form-control w-full p-2 border rounded-md"
                    placeholder="Name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <Field
                    name="email"
                    className="form-control w-full p-2 border rounded-md"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <Field
                    name="message"
                    as="textarea"
                    className="form-control w-full p-2 border rounded-md"
                    placeholder="Message"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <Field
                    name="phone"
                    className="form-control w-full p-2 border rounded-md"
                    placeholder="Phone"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
