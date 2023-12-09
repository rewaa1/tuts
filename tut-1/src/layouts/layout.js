import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dropdown = ({ label, children }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <div
      className="group relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavLink to={`/${label}`} activeClassName="underline">
        {label}
      </NavLink>
      {isDropdownOpen && (
        <div className="absolute top-full left-0 bg-white border border-gray-300 rounded shadow p-4">
          {/* Dropdown content */}
          {children}
        </div>
      )}
    </div>
  );
};

export default function Layout() {
  return (
    <div className="root-layout">
      <header>
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
          <h1>Rewaa Yasser Soliman</h1>
          <div className="flex space-x-4">
            <NavLink to="/" activeClassName="underline">
              Home
            </NavLink>
            <Dropdown label="About">
              <ul>
                <li>
                  <NavLink to="/About/Team" className="text-black" activeClassName="underline">
                    Team
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/About/Contact" activeClassName="underline">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </Dropdown>
            <Dropdown label="Help">
              <ul>
                <li>
                  <NavLink to="/Help/Contact" activeClassName="underline">
                    Support
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Help/Faq" activeClassName="underline">
                    FAQ
                  </NavLink>
                </li>
              </ul>
            </Dropdown>
            <NavLink to="/Careers" activeClassName="underline">
              Careers
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}



{/*import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="root-layout">
      <header>
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
          <h1>Rewaa Yasser Soliman</h1>
          <div className="flex space-x-4">
            <NavLink to="/" activeClassName="underline">
              Home
            </NavLink>
            <div
              className="relative group my-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="/About" activeClassName="underline">
                About
              </NavLink>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 bg-white border border-gray-300 rounded shadow p-4 my-1 ">
                  <ul>
                    <li>
                      <NavLink to="/" activeClassName="underline" className="text-black">
                        Team
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" activeClassName="underline">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div
              className="relative group my-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="/About" activeClassName="underline">
                About
              </NavLink>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 bg-white border border-gray-300 rounded shadow p-4 my-1 ">
                  <ul>
                    <li>
                      <NavLink to="/" activeClassName="underline" className="text-black">
                        Team
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" activeClassName="underline">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>  
            <NavLink to="/Help" activeClassName="underline">
              Help
            </NavLink>
            <NavLink to="/Careers" activeClassName="underline">
              Careers
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}








import {NavLink, Outlet } from 'react-router-dom'


export default function Layout() {
  

  return (
    <div className='root-layout'>
         <header>
          <nav>
            <h1>Rewaa Yasser Soliman</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About" 
            
            >About</NavLink>
            <NavLink to="/Help">Help</NavLink>
            <NavLink to="/Careers">Careers</NavLink>
          </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
*/}
