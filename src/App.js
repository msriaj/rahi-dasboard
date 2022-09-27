import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 flex">
        <Sidebar />
        <div className="w-full p-10">
          <Routes>
            <Route path="/*" element={<MainLayout />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

// tore allah bacai rakhuk ,tor sahos kom na , tui component re state er vitor voira disos
// thik ase ni ho
