function App() {
  return (
    <>
     <div className="min-h-screen flex flex-col text-white bg-gradient-to-b from-[#0F2027] to-[#2c5364]">
      
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

      <footer className="min-h-[100px] bg-[#333] flex items-center justify-center">
        <p>© 2025 Il Mio Sito Web</p>
      </footer>
    </div>
    </>
  );
}

export default App;
