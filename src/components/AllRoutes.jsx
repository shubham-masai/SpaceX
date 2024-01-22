import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Hero from './Hero'
import Capsules from './Capsules'
import Signup from './Signup'
import { PrivateRoute } from './PrivateRoute'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/capsules' element={<PrivateRoute><Capsules /></PrivateRoute>} />
        </Routes>
    )
}
export default AllRoutes