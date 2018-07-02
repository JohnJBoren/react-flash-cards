import React from 'react'

export default class CreateCard extends React.Component {
  render() {
    return (
      <form className="create-flashcard">
        <h2 className="header" for="create-flash-card">Create a Flash Card</h2>
        <div className="form-group">
          <label for="question-input">Question</label>
          <input type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label for="answer-input">Answer</label>
          <input type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary button">Save</button>
        </div>
      </form>
  )}
}
