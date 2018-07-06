import React from 'react'

export default class CardList extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const { navigate, deleteItem } = this.props
    const action = event.target.getAttribute('name')
    const $listItem = event.target.closest('.list-item')
    const id = parseInt($listItem.dataset.id, 10)
    if (action === 'edit') {
      navigate({ path: 'card-list', params: { id } })
    }
    else {
      deleteItem(id)
    }
  }

  render() {
    const { cards } = this.props
    return (
      <div className="horizontal-margin">
        <ul className="list-style">
          { cards.map((card, i) =>
            <li key={card.id} data-id={card.id} className="list-item">
              <div className="card">
                <div className="card-body text-center">
                  <h2> {card.question} </h2>
                  <div> {card.answer} </div>
                  <div className="text-right">
                    <i onClick={ this.handleClick }
                      name="edit"
                      className="edit-button fas fa-edit px-1"></i>
                    <i onClick= { this.handleClick }
                      name="delete"
                      className="delete-button fas fa-trash-alt px-1"></i>
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
