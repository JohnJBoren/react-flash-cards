import React from 'react'
import CreateCard from './create-card'
import Nav from './nav'
import CardList from './card-list'

export default class ReactFlashCards extends React.Component {
  constructor(props) {
    super(props)
    const { path } = window.location.hash
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      cards: [],
      path: '#new-card'
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const newPath = window.location.hash
      this.setState({
        path: newPath
      })
    })
  }

  handleInputChange(userInput, form) {
    const updateCards = [...this.state.cards, userInput]
    this.setState({
      cards: updateCards
    }, () => form.reset())
  }

  renderCardList() {
    return <CardList cards={ this.state.cards }/>
  }

  renderNewCard() {
    return <CreateCard onInputChange={ this.handleInputChange }/>
  }

  renderView() {
    switch (this.state.path) {
      case '#cards':
        return this.renderCardList()
      case '#new-card':
        return this.renderNewCard()
    }
  }
  render() {
    return (
      <div>
        <Nav/>
        { this.renderView() }
      </div>
    )
  }
}
