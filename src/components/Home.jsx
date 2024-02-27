import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export const Home = () => {
  const [showContainer, setShowContainer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContainer(true);
    }, 1000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`home ${showContainer ? 'show' : ''}`}>
      <div className="container">
        <img className="main-img" src="./white transparent1.png" alt="" />
      </div>
      <div className="buton">
        <Link className={`btn1 ${showContainer ? 'show' : ''}`} to={"page2"}>Let's Start</Link>
      </div>
    </div>
  );
};
