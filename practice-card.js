import React from 'react'
import { Fade } from 'reactstrap'

export default function PracticeCard({ cards, showAnswer, showArrow, index, transition, fade }) {
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
    <div className="fixed-width-500">
      <div className={'card practice-card fixed-width-500 text-center overflow-hidden ' + transitionClass}>
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
          <Fade in={ fade } tag="p" className="mx-auto">
            { cards[index].answer }
          </Fade>
        </div>
      </div>
    </div>
  )
}
