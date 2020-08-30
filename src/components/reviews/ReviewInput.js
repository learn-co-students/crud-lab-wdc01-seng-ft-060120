import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    text: "",
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addReview(this.state.text, this.props.restaurantId)
    this.setState({
      text: "",
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit" value="Add Review"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;