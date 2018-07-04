import React from 'react'
import EditCard from './edit-button'

export default function CardList(props) {
  return (
    <div className="horizontal-margin">
      <ul className="list-style">
        {props.cards.map((card, i) =>
          <li key={card.nextId} className="list-item vertical-margin">
            <div className="card">
              <h2 className="horizontal-margin"> {card.question} </h2>
              <div className="card-body horizontal-margin"> {card.answer} </div>
              <EditCard/>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}
