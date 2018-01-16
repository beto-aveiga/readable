import React from "react";
import Comments from "../comments";
import CommentsCount from "../comments/comments_count";
import { post_upVote, post_downVote } from "./actions";
import Rate from "../rate/rate";
import { connect } from "react-redux";
import _ from "lodash";
import timeago from "timeago.js";
import { Link, Route, withRouter } from "react-router-dom";
import { get_post } from "./actions";
import PostFields from "./displays/fields";
import PostFull from "./displays/full";
import PostTeaser from "./displays/teaser";

class Post extends React.Component {
  state = {
    display: "teaser"
  };

  timeago = timeago();

  componentDidMount() {
    const path_splitted = this.props.location.pathname.split("/");
    let post_id = false;

    // detecting post in full mode
    if (path_splitted.length === 4) {
      post_id = path_splitted[3];
      this.props.dispatch(get_post(post_id));
      this.setState({
        display: "full"
      });
    }

    // detecting post in edit mode
    if (path_splitted.length === 5 && path_splitted[4] ==='edit') {
      post_id = path_splitted[3];
      this.props.dispatch(get_post(post_id));
      this.setState({
        display: "edit_mode"
      });
    }


  }

  upVote = () => {
    this.props.dispatch(post_upVote(this.props.id));
  };

  downVote = () => {
    this.props.dispatch(post_downVote(this.props.id));
  };

  displays = {
    fields: PostFields.bind(this)(),


    full: PostFull.bind(this),

    teaser: PostTeaser.bind(this),

    edit_mode: () => (
        <div>MODO EDICIÓN DE POST</div>
    )

  };

  render() {
      debugger;
    return typeof this.props.id === "string" ? this.displays[this.state.display]() : (
        <div className="pa6 bg-near-white tc cb overflow-hidden gray">loading contents...</div>
    );
  }
}

function mapStoreToProps(store, own_props) {
  // this.props.location.pathname
  const path_splitted = own_props.location.pathname.split("/");
  let post_id = false;

  if (path_splitted.length === 4 || path_splitted.length === 5 ) {
    post_id = path_splitted[3];
  }

  if (path_splitted.length === 2) {
    post_id = own_props.id;
  }

  let posts = _.get(store, "postsReducer.posts", false);
  let post = posts ? posts.filter(post => post.id === post_id) : [];
  return typeof post[0] === "undefined" ? {} : post[0];
}

export default withRouter(connect(mapStoreToProps)(Post));
// export default connect(mapStoreToProps)(Post);
