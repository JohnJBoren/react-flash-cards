import React from 'react'
import CreateCard from './create-card'
import Nav from './nav'
import CardList from './card-list'
import EditCard from './edit-card'
import EmptyList from './empty-list'
import parseHash from './parse-hash'
import * as queryString from './query-string'

export default class ReactFlashCards extends React.Component {
  constructor(props) {
    super(props)
    const cards = window.localStorage.getItem('cards')
    const nextId = window.localStorage.getItem('nextId')
    const { path, params } = parseHash(window.location.hash)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleEditChange = this.handleEditChange.bind(this)
    this.navigate = this.navigate.bind(this)
    this.state = {
      nextId: JSON.parse(nextId) || 1,
      cards: JSON.parse(cards) || [],
      path: path,
      params: params

    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path, params } = parseHash(window.location.hash)
      this.setState({
        path: path,
        params: params
      })
    })
    window.addEventListener('beforeunload', () => {
      for (let key in this.state) {
        localStorage.setItem(key, JSON.stringify(this.state[key]))
      }
    })
  }

  navigate({ path, params }) {
    window.location.hash = path + queryString.stringify(params)
  }

  handleInputChange(userInput, form) {
    const updateCards = [...this.state.cards, userInput]
    this.setState({
      nextId: this.state.nextId + 1,
      cards: updateCards
    }, () => form.reset())
  }

  handleEditChange(editedCard) {
    const updateCards = [...this.state.cards]
    const elementId = updateCards.map(x => x.id).indexOf(editedCard.id)
    updateCards.splice(elementId, 1, editedCard)
    this.setState({
      cards: updateCards,
      params: {}
    })
  }

  renderCardList() {
    if (this.state.cards.length === 0) {
      return <EmptyList/>
    }
    else {
      return <CardList cards={ this.state.cards } navigate={this.navigate}/>
    }
  }

  renderEditCard() {
    const { cards } = this.state
    const { id } = this.state.params
    const parsedId = parseInt(id)
    const editCard = cards.find(card => card.id === parsedId)
    return <EditCard editCard={ editCard } onEditChange={ this.handleEditChange }/>
  }

  renderNewCard() {
    return <CreateCard nextId={this.state.nextId} onInputChange={ this.handleInputChange }/>
  }

  renderView() {
    if (Object.keys(this.state.params).length !== 0) {
      return this.renderEditCard()
    }
    else {
      switch (this.state.path) {
        case 'card-list':
          return this.renderCardList()
        case 'new-card':
          return this.renderNewCard()
      }
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
