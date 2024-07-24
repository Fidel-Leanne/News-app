import React from 'react';

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center py-3 mb-4 border-bottom">
      <h1 className="h4">NewsApp</h1>
      <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>      <nav>
        <a href="/profile" className="btn btn-outline-secondary mx-2">Profile</a>
        <a href="/login" className="btn btn-primary">Login</a>
      </nav>
    </header>
  );
};

export default Header;
