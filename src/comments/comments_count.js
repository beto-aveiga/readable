import { connect } from "react-redux";
import React from "react";
// import _ from "lodash";


class Comments_Count extends React.Component {

  componentDidMount() {
      // debugger;
    // this.props.dispatch(get_comments( this.props.id ));
  }

  commentIcon = (
      <i className="material-icons gray v-mid mr1 black--50">comment</i>
  )

  render() {
      switch (this.props.commentcount) {
        case 0: return (<div className="">{ this.commentIcon } No comments</div>);
        case 1: return (<div className="">{ this.commentIcon } 1 comment</div>);
        default: return (<div className="">{ this.commentIcon } {this.props.commentcount} comments</div>)
      }
  }
}



export default Comments_Count;
