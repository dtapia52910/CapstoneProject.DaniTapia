// App.jsx
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { createRoot } from 'react-dom/client';
import Home from "./Components/Home";

import './App.css';

function App() {
  const [token, setToken] = useState(null);

  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes as needed */}
      </Routes>
    </section>
  );
}

export default App; // Ensure default export
