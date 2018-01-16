import React from "react";

class Rate extends React.Component {
  componentDidMount() {
    // debugger;
    // this.props.dispatch(get_comments( this.props.id ));
  }

  render() {

    return (
      <div className=" ">
          Rating
          <span className="score ph2">{this.props.votescore}</span>
          <span className="f6 link dim   ph2  mr2 dib  w1 tc pointer  green v-mid" onClick={ this.props.like } ><i className="material-icons">thumb_up</i></span>
          <span className="f6 link dim   ph2  mr2 dib  w1 tc pointer  green v-mid" onClick={ this.props.dislike }><i className="material-icons">thumb_down</i></span>
      </div>
    );
  }
}

export default Rate;
