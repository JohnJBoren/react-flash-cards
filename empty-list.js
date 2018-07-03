import React from 'react'

export default function EmptyList() {
  return (
      <div className="center">
        <div className="card w-75">
          <div className="form-group">
            <h1 className="card-header text-center"> You have no flash cards </h1>
          </div>
          <div className="form-group button">
            <button className="btn btn-primary">
              <a className="nav-link text-white" href="#new-card">Make One</a>
            </button>
          </div>
        </div>
      </div>
  )
}
