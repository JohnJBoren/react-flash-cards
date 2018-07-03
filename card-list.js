import React from 'react'

export default function CardList(props) {
  return (
    <div className="horizontal-margin">
      <ul className="list-style">
        {props.cards.map((card, i) =>
          <li key={i} className="list-item vertical-margin">
            <div className="card">
              <h2 className="horizontal-margin"> {card.question} </h2>
              <div className="card-body horizontal-margin"> {card.answer} </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}
