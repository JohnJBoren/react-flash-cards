import React from 'react'

export default function EmptyList() {
  return (
    <div className="mx-auto vertical-margin">
      <div className="card list-item">
        <div className="form-group">
          <h2 className="text-center pt-3"> You have no flash cards </h2>
        </div>
        <div className="form-group center-button">
          <button className="btn btn-primary">
            <a className="nav-link text-white" href="#new-card">Make One</a>
          </button>
        </div>
      </div>
    </div>
  )
}
