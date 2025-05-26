export const About = () => {
  const frontendSkills = ["HTML", "CSS", "Javascript", "React JS"];

  const backendSkills = ["Python", "JavaScript", "PHP", "C#"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 bg-clip-text text-transparent text-center">
          {" "}
          About Me
        </h2>

        <div className="rounded-xl p-8 border-gray-400 border hover:-translate-y-1 transition-all">
          <p className="text-gray-800 mb-6">
            Passionate developer bridging design and development across web
            applications, graphics, and game experiences. Focused on creating
            digital solutions that combine technical excellence with engaging
            visual design.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-0 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm cursor-pointer hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-0 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm cursor-pointer hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-gray-400 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong> B.Sc. in Geography </strong> - Adamawa State University
                (2012-2018)
              </li>
              <li>GIS, Simulation-based Learning Environment</li>

              <li>
                <strong> MSc. in Computing </strong> - University of Roehampton
                (2025-2025)
              </li>
              <li>
                Game Design, Software Development, AR/VR Technologies, Web
                Development
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-gray-400 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 🏅 Awards/Achievements </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Winner – Best AR Educational Game Concept, Roehampton Showcase
                2025
              </li>
              <li>
                Successfully deployed AR demo app on iOS via Xcode with
                integrated sound and particle effects
              </li>

              <li>
                Runner-up – Virtual Design Sprint, Unity Student Game Jam (2024)
              </li>

              <li>
                Finalist – African Creative Tech Hackathon for Education and
                Social Impact (2023)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
