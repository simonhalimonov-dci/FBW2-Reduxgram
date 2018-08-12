import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import Photo from "./Photo"
import Comments from "./Comments"

// Turns an object whose values are action creators, into an object with the same keys, but with every action creator wrapped into a dispatch call so they may be invoked directly.
// https://redux.js.org/api/bindactioncreatorsx
import { bindActionCreators } from "redux"
// Import all our actions as an object with the name of actionCreators
import * as actionCreators from "../actions/actionCreators"

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch)
}

class Single extends React.Component {
  render() {
    console.log("SINGLE POST", this)

    // Filter the corresponding post via id that is passed through the router
    const postData = this.props.posts.filter(
      post => post.code == this.props.match.params.id
    )[0]

    const postComments = this.props.comments[postData.code] || []

    return (
      <SingleWrapper>
        <Photo {...postData} increment={this.props.increment} />

        <Comments
          comments={postComments}
          caption={postData.caption}
          postID={postData.code}
          addComment={this.props.addComment}
          removeComment={this.props.removeComment}
        />
      </SingleWrapper>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Single)

const SingleWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 800px;
`
