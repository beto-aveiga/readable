import React from "react";
import { connect } from "react-redux";
import { get_all_posts } from "./actions";
import Post from "./post";
import _ from "lodash";
import "anicollection/dist/anicollection.css";

class Posts extends React.Component {
  componentDidMount() {
    this.props.dispatch(get_all_posts());
  }

  render() {
    return (
      <div>
          {this.props.posts.map((post, i, arr) => {
              post.votescore = post.voteScore;
              post.commentcount = post.commentCount;
              delete post.voteScore;
              delete post.commentCount;
              post.deleted = post.deleted.toString();
              return <Post key={post.id} {...post} show={this.props.show} animdelin={`anim-del-0${i}0 anim-dur-050`} animdelout={`anim-del-0${arr.length - i}0 anim-dur-050`} />;
          })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  let posts = _.get(state, "postsReducer.posts", false);
  return { posts: posts ? posts : [] };
}

export default connect(mapStateToProps)(Posts);
