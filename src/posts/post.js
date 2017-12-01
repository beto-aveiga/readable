import React from "react";
import Comments from "../comments";
import { post_upVote, post_downVote } from "./actions";
import Rate from "../rate/rate";
import { connect } from "react-redux";
import _ from "lodash";

class Post extends React.Component {
  componentDidMount() {
    // debugger;
    // this.props.dispatch(get_comments( this.props.id ));
  }

  upVote = () => {
    this.props.dispatch(post_upVote(this.props.id));
  };

  downVote = () => {
    this.props.dispatch(post_downVote(this.props.id));
  };

  render() {
    return (
      <div>
        POST {this.props.id}
        <Rate like={this.upVote} dislike={this.downVote} voteScore={this.props.voteScore} />
        <Comments postId={this.props.id} />
      </div>
    );
  }
}

function mapStoreToProps(store, own_props) {
  let posts = _.get(store, "postsReducer.posts", false);
  let post = posts ? posts.filter(post => post.id === own_props.id) : [];
  return post[0];
}

export default connect(mapStoreToProps)(Post);
