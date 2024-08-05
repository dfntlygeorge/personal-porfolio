import PropTypes from "prop-types";

const Button = ({ buttonName, isLarge, href }) => {
  return (
    <a
      href={href}
      className={`inline-block transform rounded-md bg-teal-600 dark:bg-teal-700 ${isLarge ? "px-16 text-lg" : "px-12"} shadow-teal-subtle hover:shadow-teal-subtle py-3 font-bold tracking-wide text-white transition duration-300 ease-in-out hover:-translate-y-1 dark:shadow-teal-700/50 dark:hover:shadow-teal-700/70`}
      role="button"
      aria-label={buttonName}
    >
      {buttonName}
    </a>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  isLarge: PropTypes.bool,
  href: PropTypes.string,
};

Button.defaultProps = {
  isLarge: false,
  buttonName: "BUTTON",
  href: "https://www.google.com/search?sca_esv=84e39f926da01c5e&sxsrf=ADLYWIJBvCmwEoopxmFZo1wEwZGn7UlAkw:1722762724952&q=cats&udm=2&fbs=AEQNm0DYVld7NGDZ8Pi819Yg8r6em07j6rW9d2jUMtr8MB7htoxbI0iAKNRPykigVf3e9aputkbr8jzmN5LYbANOqrq5HYnx4MjtyMxZ94LvgeHWmGBcuWUoydKfNaoB5JMdZlMtXmg2De2y5O7nn-eTbNdYHsRiT1RQ-pB6qp3ejXJ5VpdCk5NA1Jug5hVR16L7F-A1C1p-4xpfp7qj2HsGNaipPZQOiw&sa=X&ved=2ahUKEwjR54Ki_9qHAxU9sFYBHRn1PBcQtKgLegQIEhAB&biw=673&bih=602&dpr=1",
};

export default Button;
