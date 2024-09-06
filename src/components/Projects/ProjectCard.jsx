import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import PropTypes from "prop-types";
import github from "../../assets/icons/github.png";
import website from "../../assets/icons/website.svg";

ProjectCard.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.array,
  image: PropTypes.node,
  source_code_link: PropTypes.string,
  source_site_link: PropTypes.string,
};
export default function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_site_link,
}) {
  return (
    <motion.section variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl h-[500px] sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[250px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end gap-1 m-3">
            <div
              onClick={() => window.open(source_site_link, "_blank")}
              className="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={website}
                alt="site"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="w-10 h-10 bg-black rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-left text-lg font-bold">{name}</h3>
          <p className="mt-2 text-left text-white text-sm">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[15px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.section>
  );
}
