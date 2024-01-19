import React from 'react'
import { Link } from 'react-router-dom'
import img from "../assets/share-removebg-preview.png"

const Navbar = () => {
    return (
        <div className='flex justify-evenly items-center  '>
            <Link className='my-3' to={"/"}> 
            {/* <img className='w-[120px] ' src={img} alt="" /> */}
            SpaceX
            </Link>
            <Link className='my-3' to={"/"}>Home</Link>
            <Link className='my-3' to={"/login"}>Login</Link>
            <Link className='my-3' to={"/signup"}>Signup</Link>
            <Link className='my-3' to={"/products"}>Products</Link>
        </div>
    )
}

export default Navbar