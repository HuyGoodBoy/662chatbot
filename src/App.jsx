// 2.50.0
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ChatBot from "./components/ChatBot";
import FAQPage from "./pages/FAQPage"
import IssuePage from "./pages/IssuePage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import ImgGen from "./components/ImgGen";
import ScaleLoader from "react-spinners/ScaleLoader";
// import { decode as atob, encode as btoa } from "js-base64";
// import { themeChange } from 'theme-change'
function App() {
  useEffect(() => {}, []);
  const [currentPage, SetCurrentPage] = useState("Home");
  return (
    <BrowserRouter>
      <div className="overflow-hidden">
        <NavBar />
        <Routes>
          <Route path="/662chatbot" element={<HomePage />} />
          <Route path="/662chatbot/chat" element={<ChatBot />} />
          <Route path="/662chatbot/issue" element={<IssuePage />} />
          <Route path="/662chatbot/faq" element={<FAQPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
