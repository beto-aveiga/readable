import React from "react";

class Rate extends React.Component {
  componentDidMount() {
    // debugger;
    // this.props.dispatch(get_comments( this.props.id ));
  }

  render() {
    return (
      <div className="rate">
          <span className="like" onClick={ this.props.like } >+</span>
          <span className="dislike" onClick={ this.props.dislike }>-</span>
          <span className="score">{this.props.voteScore}</span>
      </div>
    );
  }
}

export default Rate;
