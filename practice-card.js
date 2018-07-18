import React from 'react'

export default function PracticeCard({ cards, showAnswer, showArrow, index, transition, isHidden }) {
  let transitionClass
  if (transition === 'next') {
    transitionClass = 'slideInLeft'
  }
  if (transition === 'prev') {
    transitionClass = 'slideInRight'
  }
  if (transition === 'transition-prev') {
    transitionClass = 'slideOutRight'
  }
  if (transition === 'transition-next') {
    transitionClass = 'slideOutLeft'
  }
  return (
    <div className="fixed-width-700">
      <div className={'card practice-card fixed-width-700 text-center overflow-hidden ' + transitionClass}>
        <div className="row">
          <div className="card-body">
            <h2> { cards[index].question } </h2>
          </div>
        </div>
        <div className="row">
          <div className="card-body">
            <i
              onClick={ showAnswer }
              className={'arrow-button fas px-2 ' + showArrow }>
            </i>
            Show Answer
          </div>
        </div>
        <div className="row">
          <div className={ 'card-body ' + isHidden }>
            <p> { cards[index].answer } </p>
          </div>
        </div>
      </div>
    </div>
  )
}