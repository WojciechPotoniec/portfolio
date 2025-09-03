import AboutMe from "./AboutMe";
import Projects from "./Projects";
import GetInTouch from "./GetInTouch";

export default function MainContent({ activeView }) {
  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return <AboutMe />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <GetInTouch />;
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