import Iridescence from "./Iridescence";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

const darkColor = [0.058, 0.125, 0.153]; // #0F2027
const lightColor = [0.172, 0.325, 0.392]; // #2c5364

function App() {
  return (
    <>
      <Iridescence
        className="fixed inset-0 -z-10"
        color2={darkColor}
        color1={lightColor}
        speed={0.7}
      />
      <div className="flex text-white">
        <div className="w-2/5 h-screen sticky top-0">
          <Header />
          <NavMenu />
        </div>

        <div className="w-3/5 flex items-center">
          <MainContent />
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}

export default App;
