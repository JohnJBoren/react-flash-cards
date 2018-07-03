import React from 'react'

export default function CardList(props) {
    return (
      <div className="center">
        <ul className="list-group w-75">
          {this.props.cards.map((card) =>
            <li key={i} className="list-group-item">
              <div className="card">
                <h2 className="card-header"> {card.question} </h2>
                <div className="card-body"> {card.answer} </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    )
  }
}
