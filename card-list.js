import React from 'react'

export default function CardList(props) {
  return (
    <div>
      <ul className="list-style">
        {props.cards.map((card, i) =>
          <li key={i} className="list-item">
            <div className="card">
              <h2> {card.question} </h2>
              <div className="card-body"> {card.answer} </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}
