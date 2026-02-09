export default function Footer() {
  return (
    <footer className="bg-[#160022] border-t border-purple-800/40 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-yellow-400">
            Soumya Suryan
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Exploring technologies, building ideas, one commit at a time.
          </p>
        </div>

        {/* Center Links */}
        <ul className="flex gap-6 text-gray-300 text-sm">
          <li>
            <a href="#about" className="hover:text-yellow-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Right */}
        <p className="text-gray-500 text-sm text-center md:text-right">
          © {new Date().getFullYear()} Soumya Suryan <br />
          Built with ❤️ & curiosity
        </p>
      </div>
    </footer>
  );
}
