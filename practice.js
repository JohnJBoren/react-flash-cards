import React from 'react'
import ArrowNav from './arrow-nav'
import ProgressBar from './progress-bar'
import PracticeCard from './practice-card'

export default class Practice extends React.Component {
  constructor(props) {
    super(props)
    this.handleSlideChange = this.handleSlideChange.bind(this)
    this.handleAnswerChange = this.handleAnswerChange.bind(this)
    this.state = {
      currentIndex: 0,
      showAnswer: false, 
      transition: null
    }
  }

  handleSlideChange(action) {
    const { cards } = this.props
    const lastIndex = cards.length - 1
    const currentIndex = this.state.currentIndex
    if (action === 'previous') {
      const shouldResetIndex = currentIndex === 0
      const index = shouldResetIndex ? lastIndex : currentIndex - 1
      this.setState({transition: 'transition-prev'})
      setTimeout(() => this.setState({ currentIndex: index, showAnswer: false, transition: 'prev' }), 400)
    }
    else {
      const shouldResetIndex = currentIndex === lastIndex
      const index = shouldResetIndex ? 0 : currentIndex + 1
      this.setState({transition: 'transition-next'})
      setTimeout(() => this.setState({ currentIndex: index, showAnswer: false, transition: 'next' }), 400)
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
      <div className="practice mx-auto">
        <div className="row vertical-margin">
          <ProgressBar cards={ cards } index={ this.state.currentIndex }/>
        </div>
        <div className="row" style={ {'width': '600px'} }>
          <ArrowNav
            type="left"
            onSlideChange={ this.handleSlideChange }/>
          <div className="contain mx-auto">
            <PracticeCard 
              cards={ cards }
              showAnswer={ this.handleAnswerChange}
              index={ this.state.currentIndex }
              showArrow={ showArrow }
              transition={ this.state.transition }
              isHidden={ isHidden }/>
          </div>
          <ArrowNav
            type="right"
            onSlideChange={ this.handleSlideChange }/>
        </div>
      </div>
    )
  }
}
