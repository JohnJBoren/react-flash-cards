import React from 'react'
import CreateCard from './create-card'

export default class ReactFlashCards extends React.Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      cards: []
    }
  }

  handleInputChange(userInput) {
    const updateCards = [...this.state.cards, userInput]
    this.setState({
      cards: updateCards
    })
  }
  render() {
    return (
      <CreateCard onInputChange={ this.handleInputChange }/>
    )
  }
}
