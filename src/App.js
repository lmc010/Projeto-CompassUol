import React from 'react'
import Login from './pages/Login/'
import { BrowserRouter, Link, Routes, Route, Navigate } from 'react-router-dom'
import Cadastro from './pages/Cadastro'
import Dashboard from './pages/Dashboard'
import { MdDashboard } from 'react-icons/md'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/home'element={<Cadastro/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/dashboard'element={<Dashboard/>}/>
      <Route path='/'element={<Navigate to="/home"/>}/>
    </Routes>
    
    </>


  )
  
}

export default App