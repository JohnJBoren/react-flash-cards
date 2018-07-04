import React from 'react'
import CreateCard from './create-card'
import Nav from './nav'
import CardList from './card-list'
import EmptyList from './empty-list'

export default class ReactFlashCards extends React.Component {
  constructor(props) {
    super(props)
    const cards = window.localStorage.getItem('cards')
    const nextId = window.localStorage.getItem('nextId')
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      nextId: JSON.parse(nextId) || 1,
      cards: JSON.parse(cards) || [],
      path: window.location.hash

    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const newPath = window.location.hash
      this.setState({
        path: newPath
      })
    })
    window.addEventListener('beforeunload', () => {
      for (let key in this.state) {
        localStorage.setItem(key, JSON.stringify(this.state[key]))
      }
    })
  }

  handleInputChange(userInput, form) {
    const updateCards = [...this.state.cards, userInput]
    this.setState({
      nextId: this.state.nextId + 1,
      cards: updateCards
    }, () => form.reset())
  }

  renderCardList() {
    if (this.state.cards.length === 0) {
      return <EmptyList/>
    }
    else {
      return <CardList cards={ this.state.cards }/>
    }
  }

  renderNewCard() {
    return <CreateCard nextId={this.state.nextId} onInputChange={ this.handleInputChange }/>
  }

  renderView() {
    switch (this.state.path) {
      case '#card-list':
        return this.renderCardList()
      case '#new-card':
        return this.renderNewCard()
      default:
        return this.renderNewCard()
    }
  }
  render() {
    return (
      <div className="flash-cards container">
        <div className="row">
          <h1 className="text-center horizontal-margin">React Flash Cards</h1>
        </div>
        <div className="row">
          <Nav/>
        </div>
        <div className="row">
          { this.renderView() }
        </div>
      </div>
    )
  }
}
