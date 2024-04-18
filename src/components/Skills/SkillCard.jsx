import PropTypes from "prop-types";
SkillCard.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
};
export default function SkillCard({ icon, label }) {
  return <img src={icon} label={label} className="w-[120px] h-auto"></img>;
}
