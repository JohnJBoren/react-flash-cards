import React from 'react'

export default class PracticeCard extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onAnswerChange()
  }

  render() {
    const { currentIndex, cards, showAnswer } = this.props
    const isHidden = showAnswer ? '' : 'hidden'
    const showArrow = showAnswer
      ? 'fa-arrow-circle-down'
      : 'fa-arrow-circle-right'
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
              <i
                onClick={ this.handleClick }
                className={'arrow-button fas px-2 ' + showArrow }>
              </i>
              Show Answer
            </div>
          </div>
          <div className="row">
            <div className={ 'card-body ' + isHidden }>
              <p> { cards[currentIndex].answer } </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
