import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>
    </div>

  )
}

export default App
