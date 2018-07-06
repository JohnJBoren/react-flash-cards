import React from 'react'

export default class ProgressBar extends React.Component {
  render() {
    const { cards, index } = this.props
    const progressLength = ((index + 1) / cards.length * 100)
    const style = {
      backgroundColor: 'rgb(44, 220, 55)',
      width: `${progressLength}%`

    }
    return (
      <div className="bar-progress card horizontal-margin">
        <div className="bar-div" style={ style }></div>
      </div>
    )
  }
}
