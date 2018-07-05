import React from 'react'

export default class PracticeCard extends React.Component {
  render() {
    return (
      <div className="horizontal-margin practice-card">
        <div className="card vertical-margin text-center">
          <div className="row">
            <div className="card-body">
              <h2> Question </h2>
            </div>
          </div>
          <div className="row">
            <div className="card-body">
              <i className="fas fa-arrow-circle-right"></i>
              Show Answer
            </div>
          </div>
          <div className="row">
            <div className="card-body">
              <p> Answer </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
