import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Field from "./Field";

const Contact = () => {
  const form = useRef();
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

    if (!name) errors.name = "Name is required";
    if (!email || !/\S+@\S+\.\S+/.test(email))
      errors.email = "A valid email is required";
    if (!message) errors.message = "Message is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm("service_5yyln49", "template_otewqtn", form.current, {
        publicKey: "Qd7Kd8YWCCDNeTizp",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          setFormErrors({});
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="mx-auto max-w-lg rounded bg-white p-6 shadow-2xl lg:max-w-2xl dark:bg-gray-800"
      aria-labelledby="contact-form-title"
    >
      <h2 id="contact-form-title" className="sr-only">
        Contact Us
      </h2>

      <Field
        id="user_name"
        name="user_name"
        type="text"
        placeholder="Enter your name"
        label="Name"
        errors={formErrors}
      />

      <Field
        id="user_email"
        name="user_email"
        type="email"
        placeholder="Enter your email"
        label="Email"
        errors={formErrors}
      />

      <Field
        id="message"
        name="message"
        type="textarea"
        placeholder="Enter your message"
        label="Message"
        errors={formErrors}
      />

      <button
        type="submit"
        className="shadow-teal-subtle hover:shadow-teal-subtle inline-block w-full transform rounded-md bg-teal-600 py-3 font-bold tracking-wide text-white transition duration-300 ease-in-out hover:-translate-y-1 dark:bg-teal-700 dark:shadow-teal-700/50 dark:hover:shadow-teal-700/70"
      >
        SEND
      </button>
    </form>
  );
};

// Reusable Field component

export default Contact;
