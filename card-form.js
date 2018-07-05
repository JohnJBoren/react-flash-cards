import React from 'react'

export default class CardForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const { header, onEditChange, onInputChange, id, navigate } = this.props
    const target = event.target
    const data = new FormData(target)
    const objCard = {}
    for (let pair of data.entries()) {
      objCard[pair[0]] = pair[1]
      objCard['id'] = id
    }
    if (header === 'new') {
      onInputChange(objCard, target)
    }
    else {
      onEditChange(objCard, id)
      navigate({ path: 'card-list' })
    }
  }

  render() {
    const { header, editCard, id } = this.props
    const formHeader = header === 'new'
      ? 'Create a Flash Card'
      : 'Edit a Flash Card'

    const { question, answer } = editCard || { question: '', answer: '' }

    return (
      <div className="horizontal-margin">
        <form onSubmit= {this.handleSubmit} key={ id } className="card create-card">
          <h2 className="text-center vertical-margin">{ formHeader }</h2>
          <div className="card-body">
            <div className="form-group">
              <label>Question</label>
              <input type="text"
                name="question"
                className="form-control input"
                defaultValue={ question }/>
            </div>
            <div className="form-group">
              <label>Answer</label>
              <input type="text"
                name="answer"
                className="form-control input"
                defaultValue={ answer }/>
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
