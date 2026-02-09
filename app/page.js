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
    <div className="container1 h-auto mx-auto">
      <NavBar></NavBar>
      
      <ul className="flex justify-around my-25 w-[70%] mx-auto">
        <li className="flex flex-col justify-center text-4xl">
          <h1>The Man with a vision.</h1>
          <h1>Who never abandons the task given.</h1>
          <h2 className="text-gray-500 text-xl">Web Developer crafting performant, modern web apps with latest technologies.</h2>
         <a
  href="#c1"
  className="w-40 text-center mt-5 inline-block rounded-lg bg-yellow-400 px-6 py-4 text-2xl text-black
              hover:shadow-lg hover:-translate-y-1
             transition-all duration-300 hover:shadow-white/30 scroll-smooth"
>
  Explore
</a>


        </li>
        <li>
          <div className="text-black h-100 w-90 bg-white rounded-[5%] hover:shadow-lg hover:-translate-y-1
             transition-all duration-300 ">
           <ul className="px-5 py-3 flex  items-center gap-3">
            <img src="web-bg.jpeg" className="h-8 w-8 rounded-[50%]" alt="" />
            <li className="font-bold">Soumya Suryan</li>
           </ul>
           <img src="web-bg.jpeg" className="w-[90%] mx-auto" alt="" />
           <h1 className="px-5 pt-3">❤️ <span>🗨️</span></h1>
            <h1 className="px-5 pb-2"><span className="font-bold">soumya_suryan_</span>“I explore technologies the way others explore the maps—one unknown at a time. </h1>
          </div>
        </li>
      </ul>
        <hr className="w-[80%] flex mx-auto border-yellow-400"/>
        <section className=" min-h-200 container1" id="c1">
          <div>
            <h1 className="font-bold ml-60 text-yellow-400 text-white text-4xl mt-20">Suryan's Roadmap</h1>
            <h6 className="ml-60 text-gray-300 pt-3 ">Educational background</h6>
            <AboutCircularTimeline></AboutCircularTimeline>

          </div>
        </section>
                <hr className="w-[80%] flex mx-auto border-yellow-400" id="about"/>
                <AboutSection id=""></AboutSection>
                <hr className="w-[80%] flex mx-auto border-yellow-400"/>
        <section className="min-h-200 container1">
          <div>
            {/* <h1 className="text-center text-white text-4xl mt-20">What Suryan Brings to the Table</h1> */}
            {/* <AboutCircularTimeline></AboutCircularTimeline> */}
            <SkillSection></SkillSection>

          </div>
        </section>
        <hr className="w-[80%] flex mx-auto border-yellow-400"/>
        <section>
          <div> <h2 className="text-4xl ml-60 mt-25 font-bold text-yellow-300" id="projects">
          Suryan's Work
        </h2>
            {/* <h1 className="text-center text-white text-4xl mt-20">Suryan's Work</h1> */}
            <h6 className="ml-60 text-gray-300 pt-3 ">Scroll Right for more...</h6>
            <ProjectsSection></ProjectsSection>
          </div>
        </section>

         <Contact></Contact>

      <Footer></Footer>
    </div>
  );
}
