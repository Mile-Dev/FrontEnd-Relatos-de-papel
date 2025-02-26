import React from 'react';
import logo from '../assets/images/logo.png';
import '../App.css';

const Header = () => {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Relatos de Papel Logo"
        className="header__logo"
      />
      <h1 className="header__title">Relatos de Papel</h1>
    </header>
  );
};

export default Header;
