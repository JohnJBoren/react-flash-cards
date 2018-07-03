import React from 'react'

export default class CardList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ul className="list-group">
        {this.props.cards.map((card, i) =>
          <li className="list-group-item">
            <div className="card w-75">
              <h2 className="card-header"> {card.question} </h2>
              <div className="card-body"> {card.answer} </div>
            </div>
          </li>)
        }
      </ul>
    )
  }
}
