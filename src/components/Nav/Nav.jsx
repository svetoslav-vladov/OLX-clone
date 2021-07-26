import React from 'react';
import { FiUser, FiHeart, FiChevronDown } from 'react-icons/fi';
import { Link } from "react-router-dom";
import Style from './Nav.module.css';

const Nav = () => {
  const test = () => {
    console.log('a');
  };

  return (
    <nav>
      <Link to='/'><span className={Style.icon}><FiHeart /></span></Link>
      <button className={Style.btnToLink} onClick={test}>
        <span className={Style.icon}><FiUser /></span>
        Моят Профил
        <span className={Style.icon}><FiChevronDown /></span>
      </button>
      <Link to="/createad" className={Style.linkBtn}>Добави обява</Link>
    </nav>
  );
};
export default Nav;