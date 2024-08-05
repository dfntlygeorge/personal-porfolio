import PropTypes from "prop-types";

const Field = ({ id, name, type, placeholder, label, errors }) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="mb-4 block font-bold text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows="4"
          className="w-full rounded border border-gray-300 px-3 py-2 placeholder-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400"
          placeholder={placeholder}
          required
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          className="w-full rounded border border-gray-300 px-3 py-2 placeholder-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400"
          placeholder={placeholder}
          required
        />
      )}
      {errors[name] && <p className="text-sm text-red-500">{errors[name]}</p>}
    </div>
  );
};

export default Field;

Field.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
};
