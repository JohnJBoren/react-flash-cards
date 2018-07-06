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
      : 'fa-angle-right'

    const activity = type === 'left'
      ? 'previous'
      : 'next'
    return (
      <i
        onClick={ this.handleClick }
        className={'arrow-button fas fa-5x align-middle px-2 line-height ' + direction }
        name={ activity }>
      </i>
    )
  }
}
