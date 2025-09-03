import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header className="px-8 pt-8 flex justify-between">
      <div className="relative">
        <img
          className="w-64 h-64 rounded-br-full object-cover"
          src="/profile.png"
          alt="immagine di profilo"
        />
        <div className="absolute left-2/3 top-10">
          <span className="whitespace-nowrap text-5xl tracking-widest">
            Wojciech Potoniec
          </span>
          <p className="pt-1 pl-4 tracking-widest">Developer</p>
        </div>
        <div className="absolute left-2/3 bottom-0">
          <ul className="flex gap-8 tracking-widest text-xl">
            <li className=" flex items-center gap-x-2 cursor-pointer rounded-lg px-3 py-2 transition-shadow duration-300 hover:shadow-glow">
              <FaGithub size={30} />
              <a
                href="https://github.com/WojciechPotoniec"
                target="_blank"
                rel="noopener noreferrer"
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
