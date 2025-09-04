import AboutMe from "./AboutMe";
import Projects from "./Projects";
import GetInTouch from "./GetInTouch";

export default function MainContent({ activeView }) {
  const renderContent = () => {
    switch (activeView) {
      case 'projects':
        return <Projects />;
      case 'aboutme':
        return <AboutMe />;
      case 'contact':
        return <GetInTouch />;
      default:
        return <Projects />;
    }
  };

  return (
    <main className="flex-grow flex justify-center p-4 sm:p-6 lg:p-8 w-full">
      <div className="w-full max-w-[1200px]">
        {renderContent()}
      </div>
    </main>
  );
}