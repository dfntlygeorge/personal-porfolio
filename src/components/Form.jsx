import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Field from "./Field";
import PopupMessage from "./PopupMessage";

const Form = () => {
  const form = useRef();
  const [formErrors, setFormErrors] = useState({});
  const [popup, setPopup] = useState({ message: "", type: "" });

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
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID,
      )
      .then(
        () => {
          setPopup({
            message: "SUCCESS! Your message has been sent.",
            type: "success",
          });
          form.current.reset();
          setFormErrors({});
        },
        (error) => {
          setPopup({ message: `FAILED... ${error.text}`, type: "error" });
        },
      );
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto max-w-lg rounded bg-white p-6 shadow-2xl dark:bg-gray-800 lg:max-w-2xl"
        aria-labelledby="contact-form-title"
      >
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
          className="inline-block w-full transform rounded-md bg-teal-600 py-3 font-bold tracking-wide text-white shadow-teal-subtle transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-teal-subtle dark:bg-teal-700 dark:shadow-teal-700/50 dark:hover:shadow-teal-700/70"
        >
          SEND
        </button>
      </form>

      {/* Display popup message */}
      {popup.message && (
        <PopupMessage
          message={popup.message}
          type={popup.type}
          onClose={() => setPopup({ message: "", type: "" })}
        />
      )}
    </div>
  );
};

export default Form;
