const mainMenuItems = [
  { id: "home", name: "About Me", href: "#home" },
  { id: "projects", name: "Projects", href: "#projects" },
  { id: "contact", name: "Get In Touch", href: "#contact" },
];

export default function NavMenu({ setActiveView, activeView }) {
  return (
    <nav className="p-14 flex">
      <ul className="flex flex-col gap-y-3">
        {mainMenuItems.map((item) => (
          <li key={item.name} className="text-xl tracking-widest">
            <button
              onClick={() => setActiveView(item.id)}
              className={`relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 ${
                activeView === item.id
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
              }`}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
