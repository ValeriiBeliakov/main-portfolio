import { motion } from "framer-motion";
import { skills } from "../../constants/index";
import SkillCard from "./SkillCard";
import Title from "../Title";

const skillsAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};
const Skills = () => {
  return (
    <motion.section initial="hidden" whileInView="visible" id="skills">
      <div>
        <Title text="Навыки 🔪" className="flex flex-col items-center mb-8" />
        <motion.div
          variants={skillsAnimation}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-[70px] max-w-[800px] items-center justify-items-center  mx-auto lg:pb-10"
        >
          {skills.map((skill, index) => (
            <SkillCard key={`skill-${index}`} {...skill}></SkillCard>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
