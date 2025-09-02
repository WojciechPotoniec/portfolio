import Iridescence from "./Iridescence";

const darkColor = [0.058, 0.125, 0.153];  // #0F2027
const lightColor = [0.172, 0.325, 0.392]; // #2c5364

function App() {
  return (
    <>
      <Iridescence
        className="fixed inset-0 -z-10"
        color2={darkColor}
        color1={lightColor}
        speed={0.5}
      />
      <div className="min-h-screen flex flex-col text-white">
        <header className="h-[100px] px-8 flex items-center justify-between">
          <span>Wojciech Potoniec</span>
          <nav>Menu</nav>
        </header>

        <main className="flex-grow flex justify-center p-8">
          <div className="w-full max-w-[1200px] text-center">
            <h1>main</h1>
            <p>
              Questo contenuto avrà una larghezza massima di 1200px e sarà
              centrato.
            </p>
          </div>
        </main>

        <footer className="min-h-[100px] flex items-center justify-center">
          <p>© 2025 wojtekhub.it</p>
        </footer>
      </div>
    </>
  );
}

export default App;
