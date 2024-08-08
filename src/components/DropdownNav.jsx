import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLink from "./NavLink";
import DarkModeSwitch from "./DarkModeSwitch";

const DropdownNav = () => {
  const navLinks = [
    { href: "#hero", ariaLabel: "home", text: "HOME" },
    { href: "#about", ariaLabel: "about", text: "ABOUT" },
    { href: "#projects", ariaLabel: "projects", text: "PROJECTS" },
    { href: "#contact", ariaLabel: "contact", text: "CONTACT" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.classList.add("overflow-hidden"); // Add overflow-hidden class
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("overflow-hidden"); // Remove overflow-hidden class
    }

    // Clean up on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div className="md:hidden" ref={dropdownRef}>
      <button onClick={toggleDropdown} aria-label="Menu" className="pr-4">
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <div
        className={`absolute left-0 top-full z-10 w-full bg-white text-right text-sm transition-all duration-300 ease-in-out dark:bg-[#1e1e1e] ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav>
          <ul className="flex flex-col">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                href={link.href}
                ariaLabel={link.ariaLabel}
                className="block border-t border-[#636363] border-opacity-20 px-8 py-6"
                onClick={toggleDropdown} // Close the dropdown on click
              >
                {link.text}
              </NavLink>
            ))}
            <div className="flex justify-end pb-8 pr-8">
              <DarkModeSwitch />
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DropdownNav;
