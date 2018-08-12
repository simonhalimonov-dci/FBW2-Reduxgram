import React from 'react';
import { connect } from 'react-redux';

class Single extends React.Component {

  render () {
    console.log("SINGLE POST", this);
    

    return (
      <div className="single-photo">
        SINGLE: {this.props.match.params.id}
      </div>
    )
  }
}

export default connect()(Single);