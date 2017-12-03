import React from "react";
import Comments from "../comments";
import { post_upVote, post_downVote } from "./actions";
import Rate from "../rate/rate";
import { connect } from "react-redux";
import _ from "lodash";
import timeago from "timeago.js";

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

  display = {
    full: () => (
      <div className="fl w-100 pa2 ">
          <div className="shadow-4  bg-white tl pa4">
              <div className="f3 lh-copy black-50 measure">{this.props.title}</div>
              <div className="code black-50">{this.timeago.format(this.props.timestamp)}</div>
              <div className="pa3 pl0 measure">{this.props.body}</div>
              <Rate like={this.upVote} dislike={this.downVote} voteScore={this.props.voteScore} />
              <Comments postId={this.props.id} commentCount={this.props.commentCount} />
          </div>
      </div>
    ),
    teaser: () => (
        <div className={this.props.className}>
            <div className="fl w-100 pa2">
                <div className="shadow-4  bg-white tl ">
                    <div className="f3 lh-copy dark-blue bg-near-white ph4 pv2">
                        <div className="measure">{this.props.title}</div>
                    </div>
                    <div className="ph4 pv2">
                        <div className="code black-50">{this.timeago.format(this.props.timestamp)}</div>
                        <div className="pa3 pl0  measure">{this.props.body}</div>
                    </div>
                </div>
            </div>
        </div>
    )
  };

  render() {
    this.timeago = timeago();
    return this.display.teaser();
  }
}

function mapStoreToProps(store, own_props) {
  let posts = _.get(store, "postsReducer.posts", false);
  let post = posts ? posts.filter(post => post.id === own_props.id) : [];
  return post[0];
}

export default connect(mapStoreToProps)(Post);
