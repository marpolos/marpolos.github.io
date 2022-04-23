import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header class="header">
      <a href="/" alt="logo">Logo</a>
      <nav class="menu">
        <Link className="itens-menu" to="/">Home</ Link>
        <Link className="itens-menu" to="/about">Sobre Mim</ Link>
        <Link className="itens-menu" to="/contact">Contato</ Link>
        <Link className="itens-menu" to="/projects">Projetos</ Link>
      </nav>
    </header>
  );
}

export default Header;