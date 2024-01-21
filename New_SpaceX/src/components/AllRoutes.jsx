import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Hero from './Hero'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup/>} />
        </Routes>
    )
}
export default AllRoutes