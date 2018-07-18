import React from 'react'

export default function Nav() {
  return (
    <nav className="navbar">
      <i className="far fa-folder fa-4x text-white logo px-3"></i>
      <span style={ {'fontSize': '25px' } } className="text-white">React Flash Cards</span>
      <a className="nav-link text-white mx-auto" href="#card-list">Cards</a>
      <a className="nav-link text-white mx-auto" href="#new-card">New</a>
      <a className="nav-link text-white mx-auto" href="#practice">Practice</a>
    </nav>
  )
}
