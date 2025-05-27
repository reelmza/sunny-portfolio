import { RevealOnScroll } from "../RevealOnScroll";

const Project = ({ name, category, description, stack, link, image }) => {
  return (
    <RevealOnScroll>
      <div className="p-6 rounded-xl border border-gray-400 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
        <div className="flex items-center justify-between mb-5">
          <h3 className=" text-md lg:text-xl font-bold">
            {name || "Project Name"}
          </h3>
          <div
            className={`${
              category == "web design"
                ? " text-blue-500 bg-blue-500/10"
                : category === "graphics"
                ? " text-emerald-500 bg-emerald-500/10"
                : "text-red-500 bg-red-500/10"
            } px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm `}
          >
            {category}
          </div>
        </div>

        <div className="w-full h-[13rem] overflow-hidden rounded-lg mb-5">
          <img src={image} alt="Website Image" />
        </div>

        <p className="text-gray-400 mb-4">
          {description || "Project description goes here"}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {stack
            ? stack.map((tech, key) => (
                <span
                  key={key}
                  className="bg-gray-500/10 text-gray-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                          hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
          "
                >
                  {tech}
                </span>
              ))
            : ""}
        </div>

        <div className="flex justify-between items-center">
          <a
            href={link || "#"}
            target="blank"
            className="text-blue-400 hover:text-blue-300 transition-colors my-4"
          >
            View Project →
          </a>
        </div>
      </div>
    </RevealOnScroll>
  );
};
export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      {/* <RevealOnScroll> */}
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r  from-blue-800 via-blue-500 to-blue-800 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Project
            name={"Oayastech Website"}
            category={"web design"}
            stack={["Wordpress", "PHP"]}
            description={
              "Built a responsive website for a contracting agency with worpress and PHP."
            }
            link={"https://oayastech.com"}
            image={"/oyt_screenshot.png"}
          />
          <Project
            name={"University of Kashere"}
            category={"web design"}
            stack={["Wordpress", "PHP"]}
            description={
              "Built a school portal for the Federal University of Kashere for managing their operations."
            }
            link={"https://fukashere.edu.ng"}
            image={"/kashere_screenshot.png"}
          />
          <Project
            name={"University of Calabar"}
            category={"web design"}
            stack={["Wordpress", "PHP"]}
            description={
              "Built a school portal for the University of Calabar for managing their operations."
            }
            link={"https://www.unical.edu.ng/"}
            image={"/unical_screenshot.png"}
          />
          <Project
            name={"Executive Football"}
            category={"web design"}
            stack={["React", "Javascript"]}
            description={
              "Built a portfolio website for EFMA football agency for showcasing their work and accepting customer's feedbacks."
            }
            link={"https://www.executivefootball.org/"}
            image={"/efma_screenshot.png"}
          />

          <Project
            name={"Graphic Design"}
            category={"graphics"}
            stack={["CorelDraw", "Photoshop", "Canva"]}
            description={"A collection of my graphic design projects."}
            link={"#"}
            image={"/flyer.jpg"}
          />

          <Project
            name={"3D Game Development"}
            category={"gaming"}
            stack={["Unity", "Vuforia"]}
            description={
              "A collection of my 3D and AR/VR game development projects."
            }
            link={"#"}
            image={"/game_dev.jpg"}
          />
        </div>
      </div>
      {/* </RevealOnScroll> */}
    </section>
  );
};
