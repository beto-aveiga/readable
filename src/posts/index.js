import React from "react";
import { connect } from "react-redux";
import { get_all_posts } from "./actions";
import Post from "./post";
import _ from "lodash";


class Posts extends React.Component {

  componentDidMount() {
    this.props.dispatch(get_all_posts());
  }

  render() {
    return (
        <div>
            <h2>POSTS</h2>
            <div>
                { this.props.posts.map(post => <Post key={post.id} {...post} />) }
            </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
    let posts = _.get(state, 'postsReducer.posts', false);
    return { posts: posts ? posts: [] }
}

export default connect(mapStateToProps)(Posts);
