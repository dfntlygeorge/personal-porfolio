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

  // State to keep track of whether the dropdown is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Reference to the dropdown element
  const dropdownRef = useRef(null);

  // Function to toggle the dropdown open or closed
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Function to handle clicks outside the dropdown
  const handleClickOutside = (event) => {
    // If the click is outside the dropdown element, close the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Effect to add/remove event listeners and handle overflow on mount/unmount
  useEffect(() => {
    // If the dropdown is open, add a click event listener to the document
    // and add the overflow-hidden class to the body
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.classList.add("overflow-hidden"); // Add overflow-hidden class
    } else {
      // If the dropdown is closed, remove the click event listener and remove the overflow-hidden class
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("overflow-hidden"); // Remove overflow-hidden class
    }

    // Clean up on component unmount by removing the event listener and removing the overflow-hidden class
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
