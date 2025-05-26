import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 lg:mt-10">
          <h1 className="text-5xl md:text-8xl font-bold mb-5 lg:mb-10 bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 bg-clip-text text-transparent leading-right">
            {"Hi, I'm Sunday"}
          </h1>

          <p className="text-gray-800 text-lg lg:text-3xl mb-10 max-w-lg mx-auto bg-reds-100">
            <span className="lg:hidden">
              I’m a software developer, graphics designer and AR/VR game
              developer.
            </span>

            <span className="hidden lg:block">
              I’m a software developer, graphics designer and AR/VR game
              developer.
            </span>
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-600 to-blue-500  text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500 text-blue-600 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
