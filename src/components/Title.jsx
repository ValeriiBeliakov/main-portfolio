import PropTypes from "prop-types";
Title.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default function Title({ text, className = "" }) {
  return (
    <div className={className}>
      <h1 className="text-2xl md:text-3xl pc:4xl font-bold group-hover: text-white  -rotate-2">
        {text}
      </h1>
      <div className="w-40 h-2 bg-secondary-color rounded-full -rotate-2"></div>
      <div className="w-40 h-2 bg-main-color rounded-full translate-x-2 -rotate-2"></div>
    </div>
  );
}
