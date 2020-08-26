import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux';

class ReviewsContainer extends Component {

  filterReviews = () => {
    return this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
  }

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurantId} addReview={this.props.addReview}/>
        <Reviews reviews={this.filterReviews()} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = state => {  
  return{
  reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addReview: (text, restaurantId) => dispatch({type:"ADD_REVIEW", review: {text, restaurantId}}),
    deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
