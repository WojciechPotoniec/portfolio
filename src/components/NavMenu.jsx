const mainMenuItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Get In Touch", href: "#contact" },
];

export default function NavMenu() {
  return (
    <nav className="p-14 flex">
      <ul className="flex flex-col gap-y-3">
        {mainMenuItems.map((item) => (
          <li key={item.name} className="text-xl tracking-widest">
            <a
              href={item.href}
              className="relative pb-1 text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
