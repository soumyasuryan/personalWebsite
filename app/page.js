import Image from "next/image";
import NavBar from "./components/navbar";
import AboutCircularTimeline from "./components/AboutCircularTimeline";
import ProjectsSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import AboutSection from "./components/AboutSection";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="container1 mx-auto overflow-x-hidden">
      <NavBar />

      {/* ================= HERO SECTION ================= */}
      <section className="mt-20">
        <ul
          className="flex flex-col-reverse lg:flex-row items-center justify-between
                     gap-14 w-full lg:w-[70%] mx-auto px-6 lg:px-0"
        >
          {/* Text */}
          <li className="flex flex-col text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              The Man with a vision.
            </h1>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
              Who never abandons the task given.
            </h1>

            <h2 className="text-gray-400 text-base sm:text-lg lg:text-xl mt-4 max-w-xl">
              Web Developer crafting performant, modern web apps with latest technologies.
            </h2>

            <a
              href="#c1"
              className="w-40 mx-auto lg:mx-0 text-center mt-6 inline-block
                         rounded-lg bg-yellow-400 px-6 py-4 text-xl text-black
                         hover:shadow-lg hover:-translate-y-1
                         transition-all duration-300 hover:shadow-white/30"
            >
              Explore
            </a>
          </li>

          {/* Card */}
          <li className="w-full sm:w-[380px]">
            <div
              className="text-black bg-white rounded-xl
                         hover:shadow-lg hover:-translate-y-1
                         transition-all duration-300"
            >
              <div className="px-5 py-3 flex items-center gap-3">
                <img
                  src="web-bg.jpeg"
                  className="h-8 w-8 rounded-full"
                  alt="profile"
                />
                <span className="font-bold">Soumya Suryan</span>
              </div>

              <img
                src="web-bg.jpeg"
                className="w-[90%] mx-auto rounded-md"
                alt="post"
              />

              <div className="px-5 pt-3">❤️ <span>🗨️</span></div>

              <p className="px-5 pb-4 text-sm">
                <span className="font-bold">soumya_suryan_</span>{" "}
                I explore technologies the way others explore the maps—one unknown at a time.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <hr className="w-[85%] mx-auto border-yellow-400 mt-20" />

      {/* ================= ROADMAP ================= */}
      <section id="c1" className="mt-20">
        <h1
          className="text-3xl sm:text-4xl font-bold text-yellow-400
                     px-6 lg:px-0 lg:ml-60"
        >
          Suryan's Roadmap
        </h1>
        <h6
          className="text-gray-300 pt-3 px-6 lg:px-0 lg:ml-60"
        >
          Educational background
        </h6>

        <AboutCircularTimeline />
      </section>

      <hr className="w-[85%] mx-auto border-yellow-400 mt-20" />

      {/* ================= ABOUT ================= */}
      <section id="about" className="mt-20">
        <AboutSection />
      </section>

      <hr className="w-[85%] mx-auto border-yellow-400 mt-20" />

      {/* ================= SKILLS ================= */}
      <section className="mt-20">
        <SkillSection />
      </section>

      <hr className="w-[85%] mx-auto border-yellow-400 mt-20" />

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="mt-20">
        <h2
          className="text-3xl sm:text-4xl font-bold text-yellow-300
                     px-6 lg:px-0 lg:ml-60"
        >
          Suryan's Work
        </h2>
        <h6
          className="text-gray-300 pt-3 px-6 lg:px-0 lg:ml-60"
        >
          Scroll Right for more...
        </h6>

        <ProjectsSection />
      </section>

      {/* ================= CONTACT ================= */}
      <section className="mt-24">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
