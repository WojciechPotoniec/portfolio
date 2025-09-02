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
            <li className="flex items-center gap-x-2 relative pb-1 text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
              <FaGithub size={30} />
              <a href="https://github.com/WojciechPotoniec">GitHub</a>
            </li>
            <li className="flex gap-x-2 relative pb-1 text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
              <FaLinkedin size={30} />
              <a href="https://www.linkedin.com/in/wojciechpotoniec/">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
