import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  const [loginuser, setLoginuser] = useState({});

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            loginuser && loginuser._id ? <Home setLoginuser={setLoginuser} /> : <Login setLoginuser={setLoginuser} />} />
          <Route path="/login" element={<Login setLoginuser={setLoginuser} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
