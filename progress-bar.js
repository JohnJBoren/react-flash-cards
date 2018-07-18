import React from 'react'

export default function ProgressBar(props) {
  const { cards, index } = props
  const progressLength = ((index + 1) / cards.length * 100)
  const style = {
    height: '25px',
    width: `${progressLength}%`
  }
  return (
    <div className="progress bar-progress border mx-auto">
      <div 
        className="progress-bar bg-success bar-progress" 
        style={ style }
        role="progressbar"></div>
    </div>
  )
}
