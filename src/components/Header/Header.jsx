import React from 'react';
import avatar from '../../img/Avatar.png'
import banner from '../../img/Banner.jpg'
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={banner} alt="banner" className="header__img" />
      <div className="header__container">
      <img src={avatar} alt="avatar" className="header__avatar" />
         <div className="header__row">
        <h2 className="header__name">Ricardo Cooper</h2>
        <div className='header__btn-wrapper'>
        <a href="#" className="header__btn">Message</a>
        <a href="#" className="header__btn">Call</a>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
