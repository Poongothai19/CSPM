import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <a href="#">Home</a>
      <a href="#">Dashboard V2</a>
      <div className="search-bar">
        <input type="text" placeholder="Search anything..." />
      </div>
      <div className="user-controls">
        <span>Username</span>
      </div>
    </div>
  );
}

export default Navbar;
