import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dummypage from "./pages/Dummypage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dummy" element={<Dummypage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
