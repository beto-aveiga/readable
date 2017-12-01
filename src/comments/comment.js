import React from "react";

class Comment extends React.Component {

  componentDidMount() {
      // debugger;
    // this.props.dispatch(get_comments( this.props.id ));
  }

  render() {
    return (
        <div className="comment">{ this.props.body }</div>
    );
  }
}


export default Comment;
