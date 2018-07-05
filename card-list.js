import React from 'react'

export default class CardList extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const $listItem = event.target.closest('.list-item')
    const id = $listItem.dataset.id
    this.props.navigate({ path: 'card-list', params: { id } })

  }
  render() {
    return (
      <div className="horizontal-margin">
        <ul className="list-style">
          {this.props.cards.map((card, i) =>
            <li key={card.id} data-id={card.id} className="list-item">
              <div className="card">
                <div className="card-body text-center">
                  <h2> {card.question} </h2>
                  <div className="card-body"> {card.answer} </div>
                  <div className="text-right">
                    <i onClick={ this.handleClick } className="edit-button fas fa-edit"></i>
                  </div>
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    )
  }
}
