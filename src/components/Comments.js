import React from "react"
import styled from "styled-components"

class Comments extends React.Component {
  handleSubmit = (e) => {
    // Prevent the default behaviour
    e.preventDefault()
    const { postID } = this.props
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;    
    
    this.props.addComment(postID, author, comment)
  }

  render() {
    const { comments, caption } = this.props

    return (
      <CommentsWrapper className="comments">
        <p>{caption}</p>
        {comments == null
          ? "No comments"
          : comments.map((comment, i) => {
              return (
                <Comment key={i}>
                  <CommentAuthor>{comment.user}</CommentAuthor>
                  <CommentText>{comment.text}</CommentText>
                  <span onClick={() => this.props.removeComment(this.props.postID, i)}>
                  <CommentRemove  />

                  </span>
                </Comment>
              )
            })}
        <form ref="commentForm" onSubmit={this.handleSubmit}>
          <input type="text" name="author" ref="author" placeholder="Author"/>
          <input type="text" name="comment" ref="comment" placeholder="Comment"/>
          <input type="submit" hidden/>
        </form>
      </CommentsWrapper>
    )
  }
}

export default Comments

const CommentsWrapper = styled.div`
  max-width: 400px;
`

const Comment = styled.div``

const CommentAuthor = styled.span`
  color: blue;
  font-weight: 600;
`

const CommentText = styled.span``

const CommentRemove = props => (
  <svg
    className="feather feather-x sc-dnqmqq jxshSx"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)
