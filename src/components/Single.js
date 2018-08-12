import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

class Single extends React.Component {

  render () {
    console.log("SINGLE POST", this);

    // Filter the corresponding post via id that is passed through the router
    const postData = this.props.posts.filter(post => post.id == this.props.match.params.id)[0]

    console.log("THE POST DATA", postData);
    
    const postComments = this.props.comments[postData.code]

    console.log("The Comment data for this post: ", postComments);
    
    

    return (
      <div className="single-photo">
        SINGLE: {postData.id}

        <img src={postData.display_src} alt=""/>

        <p>Caption: {postData.caption}</p>
        <p>Likes: {postData.likes}</p>

        <div>
          {postComments.map((comment, i) => {
            return (
              <p key={i}>
                {comment.user}: {comment.text} 
              </p>
            )
          })}

        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Single);