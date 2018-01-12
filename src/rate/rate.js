import React from "react";

class Rate extends React.Component {
  componentDidMount() {
    // debugger;
    // this.props.dispatch(get_comments( this.props.id ));
  }

  render() {

    return (
      <div className=" ">
          <span className="score ph2">{this.props.votescore}</span>
          <span className="f6 link dim br-pill ba ph2  mr2 dib  w1 tc pointer b--black-10 bg-black-10 green" onClick={ this.props.like } >+</span>
          <span className="f6 link dim br-pill ba ph2  mr2 dib  w1 tc pointer b--black-10 bg-black-10 red" onClick={ this.props.dislike }>-</span>
      </div>
    );
  }
}

export default Rate;
