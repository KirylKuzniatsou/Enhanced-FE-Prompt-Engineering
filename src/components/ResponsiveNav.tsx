import React, { useState, useEffect } from 'react';

const ResponsiveNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById('menu');
      const menuBtn = document.getElementById('menuBtn');
      if (
        menu &&
        !menu.contains(event.target as Node) &&
        menuBtn &&
        !menuBtn.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <style>{`
        .nav-component {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #f0f0f0;
          padding: 1rem;
          position: relative;
          font-family: sans-serif;
        }

        .hamburger-button {
          background-color: #333;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          cursor: pointer;
          border-radius: 4px;
          z-index: 101;
        }

        .menu-list {
          display: flex;
          gap: 2rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .menu-list li {
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 4px;
        }
        .menu-list li:hover {
          background-color: #e0e0e0;
        }

        @media (max-width: 768px) {
          .hamburger-button {
            display: block;
          }
          .menu-list {
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #fff;
            border-top: 1px solid #eee;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            
            transform: translateY(-150%);
            opacity: 0;
            pointer-events: none;
            
            transition: transform 0.3s ease, opacity 0.3s ease;
            z-index: 100;
          }

          .menu-list.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }
        }

        @media (min-width: 769px) {
           .hamburger-button {
            display: none;
          }
          .menu-list {
            position: static;
            flex-direction: row;
            width: auto;
            background: transparent;
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
            box-shadow: none;
            border-top: none;
          }
        }
      `}</style>
      <nav className="nav-component">
        <button
          className="hamburger-button"
          id="menuBtn"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="menu"
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
        <ul className={`menu-list ${isMenuOpen ? 'open' : ''}`} id="menu">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default ResponsiveNav;
