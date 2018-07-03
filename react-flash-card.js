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
    if (this.state.cards.length === 0) {
      return (
        <div className="card w-75">
          <div className="form-group">
            <h1 className="card-header text-center"> You have no flash cards </h1>
          </div>
          <div className="form-group button">
            <button className="btn btn-primary">
              <a className="nav-link text-white" href="#new-card">Make One</a>
            </button>
          </div>
        </div>
      )
    }
    else {
      return <CardList cards={ this.state.cards }/>
    }
  }

  renderNewCard() {
    return <CreateCard onInputChange={ this.handleInputChange }/>
  }

  renderView() {
    switch (this.state.path) {
      case '#card-list':
        return this.renderCardList()
      case '#new-card':
        return this.renderNewCard()
    }
  }
  render() {
    return (
      <div className="flash-cards">
        <h1 className="text-center">React Flash Cards</h1>
        <Nav/>
        { this.renderView() }
      </div>
    )
  }
}
