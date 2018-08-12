import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

class PhotoGrid extends React.Component {

  render () {
    console.log("PhotoGrid", this);

    const postsData = this.props.posts
    

    return (
      <div className="photo-grid">
        PhotoGrid

        <div>
          {postsData.map((post, i) => {
            return (
              <div key={i}>
                <img src={post.display_src} alt=""/>
              </div>
            )
          })}

        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(PhotoGrid);