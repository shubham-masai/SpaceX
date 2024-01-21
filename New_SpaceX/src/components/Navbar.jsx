import React, { useState } from 'react';
import { logo, menu, close} from '../assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="spacex" className="w-[180px] h-[20px]" />

      {/* Main navigation links for larger screens */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <NavItem
          title="Home"
          active={active}
          onClick={() => setActive('Home')}
          to="/"
        />
        <NavItem
          title="Login"
          active={active}
          onClick={() => setActive('Login')}
          to="/login"
        />
        <NavItem
          title="SignUp"
          active={active}
          onClick={() => setActive('SignUp')}
          to="/signup"
          isLast
        />
      </ul>

      {/* Mobile navigation for smaller screens */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        {/* Sidebar for mobile */}
        <div
          className={`${!toggle ? 'hidden' : 'flex'
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            <NavItem
              title="Home"
              active={active}
              onClick={() => {
                setActive('Home');
                setToggle(false);
              }}
              to="/"
            />
            <NavItem
              title="Login"
              active={active}
              onClick={() => {
                setActive('Login');
                setToggle(false);
              }}
              to="/login"
            />
            <NavItem
              title="SignUp"
              active={active}
              onClick={() => {
                setActive('SignUp');
                setToggle(false);
              }}
              to="/signup"
              isLast
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

 
const NavItem = ({ title, active, onClick, to, isLast }) => (
  <li
    className={`font-poppins font-normal cursor-pointer text-[16px] ${active === title ? 'text-white' : 'text-dimWhite'
      } ${isLast ? 'sm:mr-0' : 'sm:mr-10'}`}
    onClick={onClick}
  >
    <Link to={to}>{title}</Link>
  </li>
);

export default Navbar;