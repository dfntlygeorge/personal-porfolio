import PropTypes from "prop-types";

const NavLink = ({ href, ariaLabel, children, className, onClick }) => (
  <li>
    <a
      href={href}
      aria-label={ariaLabel}
      className={`font-bold transition-colors duration-300 ease-in-out hover:text-teal-600 ${className}`}
      onClick={onClick}
    >
      {children}
    </a>
  </li>
);

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

NavLink.defaultProps = {
  className: "",
  onClick: () => {},
};

export default NavLink;
