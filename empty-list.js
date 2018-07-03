import React from 'react'

export default function EmptyList() {
  return (
      <div>
        <div className="card">
          <div className="form-group">
            <h2 className="card-header text-center"> You have no flash cards </h2>
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
