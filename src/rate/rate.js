import React from "react";

class Rate extends React.Component {
  componentDidMount() {
    // debugger;
    // this.props.dispatch(get_comments( this.props.id ));
  }

  render() {
    return (
      <div className="tr pa1 pl0 mb0 bt b--black-40 ">
          <span className="f6 link dim br-pill ba ph2 pv2 mr2 dib black w1 tc pointer" onClick={ this.props.like } >+</span>
          <span className="f6 link dim br-pill ba ph2 pv2 mr2 dib black w1 tc pointer" onClick={ this.props.dislike }>-</span>
          <span className="score ph2"> {this.props.votescore}</span>
      </div>
    );
  }
}

export default Rate;
