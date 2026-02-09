export default function NavBar(){
    return(
          <div className="flex justify-around py-10 text-white text-xl  w-[100%]">
            <div className="flex justify-center items-center gap-5">
                <img src="/hamburger.svg" className="h-15 bg-yellow-400 p-3 rounded-[50%]" alt="" />
                <div className="flex flex-col ">
                    <h2 className="text-lg">Soumya Suryan</h2>
                    <h4 className="text-sm">Web Developer</h4>
                </div>
             
            </div>
           <ul className="flex gap-5 items-center">
  <li>
    <a
      href="https://github.com/soumyasuryan/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="github-white-icon.webp"
        alt="GitHub"
        className="h-10 cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:scale-105"
      />
    </a>
  </li>

  <li>
    <a
      href="https://www.instagram.com/soumya_suryan_/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="insta-logo.png"
        alt="Instagram"
        className="h-10 cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:scale-105"
      />
    </a>
  </li>

  <li>
    <a
      href="https://in.linkedin.com/in/soumya-suryan-62bb5a380"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="linkedin-logo.png"
        alt="LinkedIn"
        className="h-10 cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:scale-105 rounded-sm"
      />
    </a>
  </li>

  <li>
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=soumyasuryan86@gmail.com" target="_blank">
  <img
    src="gmail-logo.png"
    alt="Email"
    className="h-10 cursor-pointer hover:-translate-y-1 transition-all duration-300"
  />
</a>

  </li>
</ul>

             

          </div>
    )
}