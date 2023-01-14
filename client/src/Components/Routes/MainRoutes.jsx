import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Login/Signup'
import Login from '../Login/Login'

const MainRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    </>
  )
}

export default MainRoutes