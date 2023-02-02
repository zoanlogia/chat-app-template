import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthContext } from './context/AuthContext.js'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import './style.scss'

const App = () => {

  const {currentUser} = useContext(AuthContext)
  console.log(currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />}></Route>
          <Route path='Login' element={<Login />}></Route>
          <Route path='Register' element={<Register />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App