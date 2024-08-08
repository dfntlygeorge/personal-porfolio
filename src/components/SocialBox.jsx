import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import SocialLink from "./SocialLink";
import DarkModeSwitch from "./DarkModeSwitch"; // Import the DarkModeSwitch component
import PropTypes from "prop-types";

const SocialBox = ({ className, iconColor }) => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/george-allen-donayre-570085316/",
      ariaLabel: "LinkedIn",
      icon: FaLinkedin,
    },
    {
      href: "https://github.com/dfntlygeorge",
      ariaLabel: "GitHub",
      icon: FaGithub,
    },
    {
      href: "https://www.facebook.com", // Updated the URL to Facebook's main page
      ariaLabel: "Facebook",
      icon: FaFacebook,
    },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <ul className={`flex gap-4 ${className}`}>
        {socialLinks.map((link, index) => (
          <SocialLink
            key={index}
            href={link.href}
            ariaLabel={link.ariaLabel}
            icon={link.icon}
            iconColor={iconColor}
          />
        ))}
      </ul>
      {/* Add the DarkModeSwitch */}
      <div className="">
        <DarkModeSwitch />
      </div>
    </div>
  );
};

export default SocialBox;

SocialBox.propTypes = {
  className: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
};
