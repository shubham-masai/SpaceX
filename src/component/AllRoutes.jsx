import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Login } from '../Pages/Login'
import Home from '../Pages/Home'
import { SignUp } from '../Pages/Signup'
import Products from '../Pages/Products'
import { PrivateRoute } from './PrivateRoute'
const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/products' element={<PrivateRoute><Products/></PrivateRoute>} />
        </Routes>
    )
}

export default AllRoutes