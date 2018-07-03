import React from 'react'

export default class CardList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="center">
      <ul className="list-group w-75">
        {this.props.cards.map((card) =>
          <li className="list-group-item">
            <div className="card">
              <h2 className="card-header"> {card.question} </h2>
              <div className="card-body"> {card.answer} </div>
            </div>
          </li>)
        }
      </ul>
      </div>
    )
  }
}
