import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/home";
import Landing from "./pages/landing";
import Configurator from "./pages/configurator";
import Dashboard from "./pages/dashboard";
import Footer from "./components/layout/Footer";
import "./App.css";

const App = () => {
  useEffect(() => {
    const element = document.querySelector('div[bis_skin_checked="1"]');
    if (element) {
      element.removeAttribute("bis_skin_checked");
    }
  }, []);
  return (
    <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/configurator" element={<Configurator />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        <Footer/>  
    </BrowserRouter>
  );
};

export default App;
