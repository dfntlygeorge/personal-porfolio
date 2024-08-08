import DropdownNav from "./DropdownNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <header className="fixed z-10 w-full bg-white shadow-lg dark:bg-[#1e1e1e]">
      <div className="container mx-auto flex items-center justify-between p-4 md:px-12">
        <a href="#hero" className="group flex items-center gap-4">
          <div className="relative aspect-square h-14 w-14 cursor-pointer overflow-hidden rounded-full">
            <img
              src="/assets/cat.jpg"
              alt="Profile Picture"
              className="h-full w-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
            />
            <img
              src="/assets/cathover.jpg"
              alt="Profile Picture"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            />
          </div>
          <span className="text-lg font-bold tracking-wide transition-colors duration-300 ease-in-out group-hover:text-teal-600">
            KONRADS
          </span>
        </a>
        <MainNav />
        <DropdownNav />
      </div>
    </header>
  );
};

export default Header;
