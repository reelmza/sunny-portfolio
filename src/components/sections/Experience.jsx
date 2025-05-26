// import { div } from "motion/react-client";

import { motion, useScroll } from "motion/react";

import { useRef } from "react";
import Lilcon from "../Lilcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 ml-20 lg:ml-none w-[70%] text-wrap mx-auto flex flex-col items-center justify-between"
    >
      <Lilcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <a href={companyLink || "#"} className="inline-block">
          <h3 className="capitalize font-bold text-2xl mb-2">
            {position} <span className="text-blue-600">@{company}</span>
          </h3>
        </a>

        <div className="capitalize font-medium">
          {time} | {address}
        </div>

        <p className="font-light">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center start"],
  });

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto lg:px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 bg-clip-text text-transparent text-center">
          Work Experience
        </h2>

        <div ref={ref} className="relative py-5">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[2px] h-full bg-gray-800 origin-top"
          ></motion.div>

          <ul className="w-full flex flex-col items-start justify-between ">
            <Details
              company={"AR/VR Games & App Projects"}
              position={"Freelance Developer"}
              companyLink={"#"}
              time={"July, 2024 - Present"}
              address={"Remote, UK"}
              work={
                "Created a personal AR Menu app for restaurants, using Unity + Vuforia to display 3D meals via mobile."
              }
            />

            <Details
              company={"Singa Games"}
              position={"Game Developer"}
              companyLink={"#"}
              time={"Jan - May, 2025"}
              address={"Remote, UK"}
              work={
                "Developed “The Throne is Mine”, an Augmented Reality (AR) game targeting children aged 4-12."
              }
            />

            <Details
              company={"Oayastech Nigeria Limited"}
              position={"Senior Manager"}
              companyLink={"https://oayastech.com"}
              time={"2020 - Jan, 2024"}
              address={"Abuja, Nigeria"}
              work={
                "Establish and maintain internal controls to ensure compliance with financial, human resources and administrative policies and procedures."
              }
            />

            <Details
              company={"EFMA"}
              position={"Web Developer"}
              companyLink={"https://executivefootball.org"}
              time={"2019 - Jan, 2020"}
              address={"Abuja, Nigeria"}
              work={
                "Oversee the design, implementation, and maintenance of the agency's IT infrastructure, including networks, servers, and databases."
              }
            />

            <Details
              company={"FUK"}
              position={"Web Developer"}
              companyLink={"https://fukashere.edu.ng"}
              time={"2017 - Jan, 2019"}
              address={"Gombe, Nigeria"}
              work={
                "Design intuitive and user-friendly interfaces for digital platforms, including the school website, payment portal and social media platforms."
              }
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
