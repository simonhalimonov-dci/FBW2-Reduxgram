import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// Turns an object whose values are action creators, into an object with the same keys, but with every action creator wrapped into a dispatch call so they may be invoked directly.
// https://redux.js.org/api/bindactioncreatorsx
import { bindActionCreators } from "redux";
// Import all our actions as an object with the name of actionCreators
import * as actionCreators from "../actions/actionCreators";
import Photo from "./Photo";

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

class PhotoGrid extends React.Component {
  render() {
    const postsData = this.props.posts;
    const commentsData = this.props.comments;

    return (
      <PhotoGridWrapper>
        {postsData.map((post, i) => {
          return (
            <Photo
            {...post}
            key={i}
            comments={commentsData[post.code]
            }
            increment={this.props.increment}
            />
          );
        })}
      </PhotoGridWrapper>
    );
  }
}

// With connect we connect all the state and all the actions from our Redux store to our PhotoGrid Component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoGrid);

const PhotoGridWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
`;
