import React from 'react'

export default function Nav() {
  return (
    <nav className="navbar mx-auto">
      <h4 className="text-white">React Flash Cards</h4>
      <a className="nav-link text-white" href="#card-list">Cards</a>
      <a className="nav-link text-white" href="#new-card">New</a>
      <a className="nav-link text-white" href="#practice">Practice</a>
    </nav>
  )
}
