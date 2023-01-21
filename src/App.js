import React from 'react'
import Login from './pages/Login/'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Cadastro from './pages/Cadastro'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact  element={<Cadastro/>}/>
    </Routes>
    <Routes>
      <Route path="/Login" exact element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>


  )
  
}

export default App