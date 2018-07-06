import React from 'react'
import Nav from './nav'
import CardList from './card-list'
import EmptyList from './empty-list'
import CardForm from './card-form'
import PracticeCard from './practice-card'
import ArrowNav from './arrow-nav'
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
    this.handleDeleteChange = this.handleDeleteChange.bind(this)
    this.handleSlideChange = this.handleSlideChange.bind(this)
    this.handleAnswerChange = this.handleAnswerChange.bind(this)
    this.navigate = this.navigate.bind(this)
    this.state = {
      nextId: JSON.parse(nextId) || 1,
      cards: JSON.parse(cards) || [],
      path: path,
      params: params || {},
      currentIndex: 0,
      showAnswer: false

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
      localStorage.setItem('nextId', JSON.stringify(this.state['nextId']))
      localStorage.setItem('cards', JSON.stringify(this.state['cards']))

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

  handleEditChange(id, editedCard) {
    const updateCards = [...this.state.cards]
    const elementIndex = updateCards.map(x => x.id).indexOf(id)
    updateCards.splice(elementIndex, 1, editedCard)
    this.navigate('card-list', {})
    this.setState({ cards: updateCards })
  }

  handleDeleteChange(id) {
    const updateCards = [...this.state.cards]
    const elementIndex = updateCards.map(x => x.id).indexOf(id)
    updateCards.splice(elementIndex, 1)
    this.setState({ cards: updateCards })
  }

  handleSlideChange(action) {
    const lastIndex = this.state.cards.length - 1
    const currentIndex = this.state.currentIndex
    if (action === 'previous') {
      const shouldResetIndex = currentIndex === 0
      const index = shouldResetIndex ? lastIndex : currentIndex - 1
      this.setState({ currentIndex: index })
    }
    else {
      const shouldResetIndex = currentIndex === lastIndex
      const index = shouldResetIndex ? 0 : currentIndex + 1
      this.setState({ currentIndex: index })
    }
  }

  handleAnswerChange() {
    const showAnswer = this.state.showAnswer
    this.setState({ showAnswer: !showAnswer })
  }

  renderCardList() {
    if (this.state.cards.length === 0) {
      return <EmptyList/>
    }
    else {
      return (
        <CardList
          cards={ this.state.cards }
          navigate={ this.navigate }
          deleteItem= { this.handleDeleteChange }/>
      )
    }
  }

  renderEditCard() {
    const { cards } = this.state
    const { id } = this.state.params
    const parsedId = parseInt(id, 10)
    const editCard = cards.find(card => card.id === parsedId)
    return (
      <CardForm
        header={'edit'}
        id={ parsedId }
        editCard={ editCard }
        navigate={ this.navigate }
        onEditChange={ this.handleEditChange }/>
    )
  }

  renderNewCard() {
    return (
      <CardForm
        header={'new'}
        id={ this.state.nextId }
        onInputChange={ this.handleInputChange }/>
    )
  }

  renderPracticeCard() {
    if (this.state.cards.length === 0) {
      return <EmptyList/>
    }
    else {
      return (
        <div className="row horizontal-margin">
          <ArrowNav
            type={'left'}
            onSlideChange={ this.handleSlideChange }/>
          <PracticeCard
            onAnswerChange={ this.handleAnswerChange }
            showAnswer={ this.state.showAnswer }
            currentIndex={ this.state.currentIndex }
            cards={ this.state.cards }/>
          <ArrowNav
            type= {'right'}
            onSlideChange={ this.handleSlideChange }/>
        </div>
      )
    }
  }

  renderView() {
    switch (this.state.path) {
      case 'card-list':
        if (this.state.params.hasOwnProperty('id')) {
          return this.renderEditCard()
        }
        else {
          return this.renderCardList()
        }
      case 'new-card':
        return this.renderNewCard()
      case 'practice':
        return this.renderPracticeCard()
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
