import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Iridescence from "./Iridescence";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import MainContent from "./components/MainContent";
import ProjectDetail from "./components/ProjectDetail";

const darkColor = [0.058, 0.125, 0.153]; // #0F2027
const lightColor = [0.172, 0.325, 0.392]; // #2c5364

function App() {
  const [activeView, setActiveView] = useState('home');
  
  return (
    <>
      <Iridescence
        className="fixed inset-0 -z-10"
        color1={darkColor}
        color2={lightColor}
        speed={1.0}
      />
      
      <Routes>
        {/* Rotta principale del portfolio */}
        <Route 
          path="/" 
          element={
            <div className="flex text-white">
              <div className="w-2/5 h-screen sticky top-0">
                <Header />
                <NavMenu setActiveView={setActiveView} activeView={activeView} />
              </div>
              <div className="w-3/5 flex items-center">
                <MainContent activeView={activeView} />
              </div>
            </div>
          } 
        />
        
        {/* Rotta per i dettagli dei progetti */}
        <Route 
          path="/project/:projectId" 
          element={<ProjectDetail />} 
        />
      </Routes>
    </>
  );
}

export default App;