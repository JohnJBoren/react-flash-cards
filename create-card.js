import React from 'react'

export default class CreateCard extends React.Component {
  render() {
    return (
      <form className="create-flashcard">
        <h2 className="header">Create a Flash Card</h2>
        <div className="form-group">
          <label>Question</label>
          <input type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label>Answer</label>
          <input type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary button">Save</button>
        </div>
      </form>
  )}
}
