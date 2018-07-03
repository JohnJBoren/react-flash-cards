import React from 'react'

export default function Nav() {
  return (
    <div className="horizontal-margin">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link" href="#card-list">Cards</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#new-card">New</a>
        </li>
      </ul>
    </div>
  )
}
