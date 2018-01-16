import React from "react";
import { connect } from "react-redux";
import { get_comments } from "./actions";
import Comment from "./comment";
import _ from "lodash";

class Comments extends React.Component {
  componentDidMount() {
    this.props.dispatch(get_comments(this.props.postid));
  }

  render() {
    return (
      <div className="pa4 cb">
          <h2 className="f5 gray tc tracked-mega mb4">COMMENTS {this.props.commentCount}</h2>
          {this.props.comments.map(comment => <Comment key={comment.id} {...comment} />)}
      </div>
    );
  }
}

function mapStoreToProps(state, props) {
  let comments = _.get(state, "commentsReducer.comments", false);
  return { comments: comments ? comments.filter(e => props.postid === e.parentId) : [] };
}

export default connect(mapStoreToProps)(Comments);
