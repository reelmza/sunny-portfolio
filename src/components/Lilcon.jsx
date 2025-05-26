import { motion, useScroll } from "motion/react";

const Lilcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["end end", "end center"],
  });
  return (
    <figure className="absolute left-0 fill-white stroke-gray-800 scale-75 lg:scale-75">
      <svg
        className="-rotate-90"
        width={"75"}
        height={"75"}
        viewBox="0 0 100 100"
      >
        <circle
          cx={"75"}
          cy={"50"}
          r={"20"}
          className="stroke-gray-800 stroke-1 fill-none"
        />

        <motion.circle
          style={{
            pathLength: scrollYProgress,
          }}
          cx={"75"}
          cy={"50"}
          r={"20"}
          className="stroke-[4px] stroke-gray-800"
        />

        <circle
          cx={"75"}
          cy={"50"}
          r={"10"}
          className="stroke-none fill-blue-500"
        />
      </svg>
    </figure>
  );
};

export default Lilcon;
