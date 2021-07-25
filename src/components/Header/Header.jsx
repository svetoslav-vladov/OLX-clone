import React from 'react';
import { Link } from "react-router-dom";
import Nav from '../Nav/Nav';
import Style from './Header.module.css';
import classNames from 'classnames';

const Header = () => {
  return (
    <div className={Style.headerSection}>
      <div className={Style.container}>
        <div className={Style.header}>
          <div className={Style.logo}>
            <Link to="/" className={Style.logoLink} title="OLX clone">
              <span className={Style.ologo}></span>
              <span className={Style.llogo}></span>
              <span className={Style.xlogo}></span>
              OLX clone
            </Link>
          </div>
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Header;