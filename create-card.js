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
      <div className="center">
        <form onSubmit= {this.handleSubmit} className="card box-size">
          <h2 className="card-header text-center">Create a Flash Card</h2>
          <div className="card-body">
            <div className="form-group">
              <label>Question</label>
              <input type="text" name="question" className="form-control"/>
            </div>
            <div className="form-group">
              <label>Answer</label>
              <input type="text" name="answer" className="form-control"/>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Save</button>
            </div>
          </div>
        </form>
      </div>
  )}
}
