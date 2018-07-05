import React from 'react'

export default class PracticeCard extends React.Component {
  render() {
    const { currentIndex, cards } = this.props
    return (
      <div className="horizontal-margin practice-card">
        <div className="card vertical-margin text-center">
          <div className="row">
            <div className="card-body">
              <h2> { cards[currentIndex].question } </h2>
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
              <p> { cards[currentIndex].answer } </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
