import AboutMe from "./AboutMe";
import Projects from "./Projects";

const Contact = () => (
    <div className="animate-fade-in-up">
        <h1 className="text-4xl font-bold tracking-widest uppercase">Contattami</h1>
    </div>
);

export default function MainContent({ activeView }) {
  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return <AboutMe />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <main className="flex-grow flex justify-center p-8 w-full">
      <div className="w-full max-w-[1200px]">
        {renderContent()}
      </div>
    </main>
  );
}