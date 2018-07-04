import React from 'react'

export default class EditCard extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    const target = event.target
    const data = new FormData(target)
    const editedCard = {}
    for (let pair of data.entries()) {
      editedCard[pair[0]] = pair[1]
      editedCard['id'] = this.props.editCard.id
    }
    this.props.onEditChange(editedCard)
  }
  render() {
    return (
      <div className="horizontal-margin">
        <form onSubmit= {this.handleSubmit} className="card create-card">
          <h2 className="text-center vertical-margin">Edit a Flash Card</h2>
          <div className="card-body">
            <div className="form-group">
              <label>Question</label>
              <input type="text"
                name="question"
                className="form-control input"
                defaultValue={this.props.editCard.question}/>
            </div>
            <div className="form-group">
              <label>Answer</label>
              <input type="text"
                name="answer"
                className="form-control input"
                defaultValue={this.props.editCard.answer}/>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Save</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
