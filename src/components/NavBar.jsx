import { useState } from "react";
import { navLinks } from "../constants";
import menu_icon from "../assets/icons/menu_icon.svg";
import close from "../assets/icons/close.png";
import MobileNav from "./MobileNav/MobileNav";
import Logo from "./Logo";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="fixed top-0 left-0 py-5 w-full  z-30 p-4 ">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center justify-center gap-3">
            <ul className="list-none  md:flex md:flex-row gap-10 hidden ">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    className="menu-item cursor-pointer pc:text-2xl relative"
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
            <button onClick={toggleMenu}>
              {openMenu ? (
                <img
                  src={close}
                  alt="close"
                  className="w-10 h-auto  cursor-pointer md:hidden"
                />
              ) : (
                <img
                  src={menu_icon}
                  alt="menu"
                  className="w-10 h-auto  cursor-pointer md:hidden"
                />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
