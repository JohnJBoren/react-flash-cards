import React from 'react'
import ArrowNav from './arrow-nav'
import ProgressBar from './progress-bar'

export default class PracticeCard extends React.Component {
  constructor(props) {
    super(props)
    this.handleSlideChange = this.handleSlideChange.bind(this)
    this.handleAnswerChange = this.handleAnswerChange.bind(this)
    this.state = {
      currentIndex: 0,
      showAnswer: false
    }
  }

  handleSlideChange(action) {
    const { cards } = this.props
    const lastIndex = cards.length - 1
    const currentIndex = this.state.currentIndex
    if (action === 'previous') {
      const shouldResetIndex = currentIndex === 0
      const index = shouldResetIndex ? lastIndex : currentIndex - 1
      this.setState({ currentIndex: index, showAnswer: false })
    }
    else {
      const shouldResetIndex = currentIndex === lastIndex
      const index = shouldResetIndex ? 0 : currentIndex + 1
      this.setState({ currentIndex: index, showAnswer: false })
    }
  }

  handleAnswerChange() {
    const showAnswer = this.state.showAnswer
    this.setState({ showAnswer: !showAnswer })
  }

  render() {
    const { cards } = this.props
    const isHidden = this.state.showAnswer ? '' : 'hidden'
    const showArrow = this.state.showAnswer
      ? 'fa-arrow-circle-down'
      : 'fa-arrow-circle-right'
    return (
      <div className="practice horizontal-margin">
        <div className="row">
          <ProgressBar cards={ cards } index={ this.state.currentIndex }/>
        </div>
        <div className="row">
          <ArrowNav
            type="left"
            onSlideChange={ this.handleSlideChange }/>
          <div className="card practice-card vertical-margin text-center">
            <div className="row">
              <div className="card-body">
                <h2> { cards[this.state.currentIndex].question } </h2>
              </div>
            </div>
            <div className="row">
              <div className="card-body">
                <i
                  onClick={ this.handleAnswerChange }
                  className={'arrow-button fas px-2 ' + showArrow }>
                </i>
                Show Answer
              </div>
            </div>
            <div className="row">
              <div className={ 'card-body ' + isHidden }>
                <p> { cards[this.state.currentIndex].answer } </p>
              </div>
            </div>
          </div>
          <ArrowNav
            type="right"
            onSlideChange={ this.handleSlideChange }/>
        </div>
      </div>
    )
  }
}
