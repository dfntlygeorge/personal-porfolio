import PropTypes from "prop-types";

const SocialLink = ({ href, ariaLabel, icon: Icon, iconColor }) => {
  return (
    <li>
      <a
        href={href}
        aria-label={ariaLabel}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Icon
          className={`text-white dark:text-[#e0e0e0] ${iconColor}`}
          size={24}
        />
      </a>
    </li>
  );
};

export default SocialLink;

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};
