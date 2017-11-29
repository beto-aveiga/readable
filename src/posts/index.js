import React from "react";
import { connect } from "react-redux";
import { get_all_posts } from "./actions";
import Comments from "../comments";

class Posts extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.props.dispatch(get_all_posts());
  }

  render() {
    return this.props.posts.map(post => <div>{post.id}</div>);
  }
}

function mapStateToProps(state) {
  // console.let nameog(state);
  console.log("state", state);
  // debugger;
  return {
    posts: "postsReducer" in state && "posts" in state.postsReducer ? state.postsReducer.posts : []
  };
}

export default connect(mapStateToProps)(Posts);
