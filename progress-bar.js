import React from 'react'

export default function ProgressBar(props) {
  const { cards, index } = props
  const progressLength = ((index + 1) / cards.length * 100)
  const style = {
    backgroundColor: 'rgb(44, 220, 55)',
    width: `${progressLength}%`

  }
  return (
    <div className="bar-progress card mx-auto">
      <div className="bar-current-progress" style={ style }></div>
    </div>
  )
}
