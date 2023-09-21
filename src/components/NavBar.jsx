import React, { useState } from 'react';

const NavigationBar = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleResponsive = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <div>
      <div className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#news">Blog</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a
          href="javascript:void(0);"
          className="icon"
          onClick={toggleResponsive}
        >
          <i className={`fa fa-bars`}></i>
        </a>
      </div>

      <div style={{ paddingLeft: '16px' }}>
      </div>
    </div>
  );
};

export default NavigationBar;
