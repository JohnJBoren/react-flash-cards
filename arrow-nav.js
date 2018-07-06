import React from 'react'

export default class ArrowNav extends React.Component {
  render() {
    const { type } = this.props

    const direction = type === 'left' ? 'fa-angle-left' : 'fa-angle-right'
    return (
      <i className={'fas fa-7x align-middle px-2 line-height ' + direction }></i>
    )
  }
}
