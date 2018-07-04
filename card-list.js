import React from 'react'

export default class CardList extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const $listItem = event.target.closest('.list-item')
    const cardId = $listItem.value
    console.log(cardId)

  }
  render() {
    return (
      <div className="horizontal-margin">
        <ul className="list-style">
          {this.props.cards.map((card, i) =>
            <li key={card.id} value={card.id} className="list-item vertical-margin">
              <div className="card">
                <h2 className="horizontal-margin"> {card.question} </h2>
                <div className="card-body horizontal-margin"> {card.answer} </div>
                <i onClick={ this.handleClick } className="edit-button fas fa-edit"></i>
              </div>
            </li>
          )}
        </ul>
      </div>
    )
  }
}
