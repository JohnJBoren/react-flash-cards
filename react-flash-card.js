import React from 'react'
import CreateCard from './create-card'
import Nav from './nav'
import CardList from './card-list'

export default class ReactFlashCards extends React.Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      cards: []
    }
  }

  handleInputChange(userInput, form) {
    const updateCards = [...this.state.cards, userInput]
    this.setState({
      cards: updateCards
    }, () => form.reset())
  }
  render() {
    return (
      <div>
        <Nav/>
        <CreateCard onInputChange={ this.handleInputChange }/>
        <CardList/>
      </div>
    )
  }
}
