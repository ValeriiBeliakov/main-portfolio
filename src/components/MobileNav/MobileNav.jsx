import { navLinks } from "../../constants";
import PropTypes from "prop-types";
import Logo from "../Logo";

MobileNav.propTypes = {
  isOpen: PropTypes.bool,
  toggleMenu: PropTypes.func,
};
export default function MobileNav({ isOpen, toggleMenu }) {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="w-[60vw] h-[100vh] bg-tertiary p-10 flex flex-col items-center gap-5">
          <Logo className="flex-col" />
          <ul className="list-none  flex flex-col gap-4 ">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  className="menu-item cursor-pointer relative text-lg"
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
