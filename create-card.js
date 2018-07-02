import React from 'react'

export default class CreateCard extends React.Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label for="question-input">Question</label>
          <input type="text" className="form-control"/>
          </div>
        <div className="form-group">
          <label for="answer-input">Answer</label>
          <input type="text" className="form-control"/>
        </div>
      </form>
  )}
}
