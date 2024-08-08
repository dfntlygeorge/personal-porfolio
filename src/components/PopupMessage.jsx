// PopupMessage.jsx

import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const PopupMessage = ({ message, type, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (message) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        setTimeout(onClose, 300); // Delay to match the fade-out transition
      }, 3000); // Show for 3 seconds
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return (
    <div
      className={`fixed bottom-4 right-4 rounded-lg p-4 shadow-lg transition-opacity duration-300 ease-in-out ${
        show ? "opacity-100" : "opacity-0"
      } ${type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
      role="alert"
    >
      {message}
    </div>
  );
};

export default PopupMessage;

PopupMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "error"]).isRequired,
  onClose: PropTypes.func.isRequired,
};
