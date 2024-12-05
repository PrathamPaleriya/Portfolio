import React from "react";
import TagContainer from "./TagContainer";
import { motion } from "framer-motion";
import { TextFade } from "./animation/TextFade";

function ProjectContainer({tags, src,title ,description, site, github, ascent, alternate = false}) {
  return (
    <div className="relative flex items-center">
      <div style={{ backgroundColor: ascent }} className={`absolute w-full lg:h-[433px] blur-[108.20px]`}></div>
      <div className={`relative flex ${alternate ? "flex-row-reverse" : "flex-row"} items-center w-full h-full justify-between z-10`}>
        <div className="h-full w-[50%]">
          <img
            src={src}
            alt="this is a img"
            className="lg:h-[368px] lg:w-full border-8 border-white rounded-3xl bg-white object-cover object-center"
          />
        </div>

        <div className="flex flex-col items-start justify-between text-start lg:h-[368px] lg:py-5">
          <TextFade className="flex items-center gap-3">
            {tags.map((tag, index) => (
                <div key={index}>
                    <TagContainer text={tag} />
                </div>
            ))}
          </TextFade>
          <div className="space-y-2">
            <div className="lg:text-4xl">{title}</div>
            <div className="lg:text-2xl text-pgray">
              {description}
            </div>
          </div>
          <div className="flex items-center text-2xl text-white gap-8">
            <motion.a
              whileHover={{ background: "#0066ff"}}
              whileTap={{ scale: 0.90 }}
              transition={{ type: "spring"}}
              href={site}
              className="lg:w-[145px] text-center px5 py-2 rounded-md bg-pblue"
              target="_blank"
            >
              Visit
            </motion.a>
            <motion.a
              whileHover={{ background: "#000000"}}
              whileTap={{ scale: 0.90 }}
              transition={{ type: "spring"}}
              href={github}
              className="lg:w-[145px] text-center px5 py-2 rounded-md bg-pblack"
              target="_blank"
            >
              Github
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectContainer;
