import React from 'react'
import { FaUser, FaSearch } from "react-icons/fa";
import "./nav.css";
export const Navbar = ({ onSearchInputChange}) => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-right">
          <div className="profile-icon">
            <FaUser />
          </div>
          
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search" onChange={onSearchInputChange}/>
            <button>
              <FaSearch />
            </button>
          </div>
      </nav>
      </div>
  )
}
