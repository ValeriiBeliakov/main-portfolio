import { Link } from "react-router-dom";
import PropTypes from "prop-types";
FooterIcons.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
};
export default function FooterIcons({ icon, label }) {
  return (
    <li>
      <Link href="#">
        <img src={icon} alt={label} className="w-[38px] h-auto" />
      </Link>
    </li>
  );
}
