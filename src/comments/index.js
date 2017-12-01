import React from "react";
import { connect } from "react-redux";
import { get_comments } from "./actions";
import Comment from "./comment";
import _ from "lodash";

class Comments extends React.Component {

  componentDidMount() {
    this.props.dispatch(get_comments( this.props.postId ));
  }

  render() {
    return(
        this.props.comments.map(comment => <Comment id={comment.id} body={comment.body} key={comment.id} />)
    );
  }
}

function mapStoreToProps(state, props) {
  let comments = _.get(state, 'commentsReducer.comments', false);
  return { comments: comments ? comments.filter( e => props.postId === e.parentId ) : [] }
}

export default connect(mapStoreToProps)(Comments);
