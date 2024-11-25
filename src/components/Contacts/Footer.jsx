import { footer_icons } from "../../constants";
import FooterIcons from "./FooterIcons";

const Footer = () => {
  return (
    <footer className="w-full p-6 bg-main-color flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center">
        <ul className="flex gap-4 justify-center items-center">
          {footer_icons?.map((icon, index) => (
            <FooterIcons key={`footer-icon-${index}`} {...icon} />
          ))}
        </ul>
        <div>2024 frontend-dev.com</div>
      </div>
    </footer>
  );
};

export default Footer;
