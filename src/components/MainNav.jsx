import NavLink from "./NavLink";

const MainNav = () => {
  const navLinks = [
    { href: "#hero", ariaLabel: "home", text: "HOME" },
    { href: "#about", ariaLabel: "about", text: "ABOUT" },
    { href: "#projects", ariaLabel: "projects", text: "PROJECTS" },
    { href: "#contact", ariaLabel: "contact", text: "CONTACT" },
  ];
  return (
    <nav>
      <ul className="hidden gap-12 md:flex">
        {navLinks.map((link, index) => (
          <NavLink key={index} href={link.href} ariaLabel={link.ariaLabel}>
            {link.text}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
