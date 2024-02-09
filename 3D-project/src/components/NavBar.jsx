import React from 'react';
import './Navbar.css'
import { GiAtom } from "react-icons/gi";

const NavBar = () => {
  return (
    <div className='menu-general'>
        <div>
            <GiAtom size = {50} className='giAtom'/>
        </div>
      <div className='menu'>
        <ul>Home</ul>
        <ul>About</ul>
        <ul>Pricing</ul>
        <ul>Contact</ul>
      </div>
    </div>
  );
};

export default NavBar;
