import React from 'react'

export default class CreateCard extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const target = event.target
    const data = new FormData(target)
    const newCard = {}
    for (let pair of data.entries()) {
      newCard[pair[0]] = pair[1]
    }
    this.props.onInputChange(newCard, target)
  }

  render() {
    return (
      <form onSubmit= {this.handleSubmit} className="card box-size">
        <div className="card-body">
          <h2 className="header">Create a Flash Card</h2>
          <div className="form-group">
            <label>Question</label>
            <input type="text" name="question" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Answer</label>
            <input type="text" name="answer" className="form-control"/>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary button">Save</button>
          </div>
        </div>
      </form>
  )}
}
