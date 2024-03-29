import React from 'react'

export default class ArrowNav extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const action = event.target.getAttribute('name')
    this.props.onSlideChange(action)
  }
  render() {
    const { type } = this.props
    const direction = type === 'left'
      ? 'fa-angle-left'
      : 'fa-angle-right right-justify'

    const activity = type === 'left'
      ? 'previous'
      : 'next'
    return (
      <i
        onClick={ this.handleClick }
        className={'arrow-button position-absolute fas fa-5x align-middle px-2 arrow-nav ' + direction }
        name={ activity }>
      </i>
    )
  }
}
