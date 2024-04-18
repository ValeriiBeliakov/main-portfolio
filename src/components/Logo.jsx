import { Link } from "react-router-dom";
import logo from "../assets/icons/logo-color.svg";
import PropTypes from "prop-types";

const Logo = ({ className }) => {
  return (
    <>
      <Link
        to="/"
        className={`flex items-center justify-center gap-5 ${className}`}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <img src={logo} alt="logo" className={`rounded-full h-auto w-[50px]`} />
        <span className="text-base md:text-3xl  text-white  ">
          web-developer
        </span>
      </Link>
    </>
  );
};
Logo.propTypes = {
  className: PropTypes.string,
};
export default Logo;
