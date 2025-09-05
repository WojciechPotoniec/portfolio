import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header className="px-4 sm:px-8 pt-4 lg:pt-8 flex justify-between">
      <div className="relative max-sm:mx-auto">
        <img
          className="max-sm:mx-auto w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-br-full object-cover"
          src="/profile.png"
          alt="immagine di profilo"
        />
        
        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden mt-4 space-y-4">
          <div className="text-center sm:text-left">
            <span className="font-display block text-2xl sm:text-3xl md:text-4xl tracking-widest font-bold">
              Wojciech Potoniec
            </span>
            <p className="font-body pt-1 tracking-widest text-sm sm:text-base">Developer</p>
          </div>
          <ul className="font-nav flex justify-center sm:justify-start gap-4 sm:gap-6 tracking-widest text-lg">
            <li>
              <a
                href="https://github.com/WojciechPotoniec"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-2 cursor-pointer rounded-lg px-3 py-2 transition-shadow duration-300 hover:shadow-glow"
              >
                <FaGithub size={30} />
                <span className="font-nav hidden sm:inline">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/wojciechpotoniec/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-2 cursor-pointer rounded-lg px-3 py-2 transition-shadow duration-300 hover:shadow-glow"
              >
                <FaLinkedin size={30} />
                <span className="font-nav hidden sm:inline">Linkedin</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop Layout - Original positioning restored */}
        <div className="absolute left-2/3 top-10 hidden lg:block">
          <span className="font-display whitespace-nowrap text-5xl tracking-widest font-bold">
            Wojciech Potoniec
          </span>
          <p className="font-body pt-1 pl-4 tracking-widest">Developer</p>
        </div>
        <div className="absolute left-2/3 bottom-0 hidden lg:block">
          <ul className="font-nav flex gap-8 tracking-widest text-xl">
            <li className=" flex items-center gap-x-2 cursor-pointer rounded-lg px-3 py-2 transition-shadow duration-300 hover:shadow-glow">
              <FaGithub size={30} />
              <a
                href="https://github.com/WojciechPotoniec"
                target="_blank"
                rel="noopener noreferrer"
                className="font-nav"
              >
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-x-2 cursor-pointer rounded-lg px-3 py-2 transition-shadow duration-300 hover:shadow-glow">
              <FaLinkedin size={30} />
              <a
                href="https://www.linkedin.com/in/wojciechpotoniec/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-nav"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
