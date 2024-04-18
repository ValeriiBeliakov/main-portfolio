import PropTypes from "prop-types";

ContactInfoCard.propTypes = {
  iconUrl: PropTypes.node,
  text: PropTypes.string,
};
export default function ContactInfoCard({ iconUrl, text }) {
  return (
    <div className="flex flex-col gap-3 items-center justify-center bg-bg-cards border-2 border-main-color rounded-md p-7 mb-10">
      <div>
        <img src={iconUrl} alt={text} className="w-12 h-auto" />
      </div>
      <p>{text}</p>
    </div>
  );
}
