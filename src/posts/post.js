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

class Post extends React.Component {
  state = {
    display: "teaser"
  };

  timeago = timeago();

  componentDidMount() {
    const path_splitted = this.props.location.pathname.split("/");
    let post_id = false;

    if (path_splitted.length === 4) {
      post_id = path_splitted[3];
      this.props.dispatch(get_post(post_id));
      this.setState({
        display: "full"
      });
    }
  }

  upVote = () => {
    this.props.dispatch(post_upVote(this.props.id));
  };

  downVote = () => {
    this.props.dispatch(post_downVote(this.props.id));
  };

  display = {
    fields: {
      comments: (
        <div className="fl w-100 w-third-ns pa2">
            <div className=" bg-white pv2">
                <CommentsCount commentcount={this.props.commentcount} />
            </div>
        </div>
      ),
      links: (
        <div className=" bg-white pv2">
            <Link to={`/posts/${this.props.category}/${this.props.id}/edit`} className="no-underline">
                <i className="material-icons v-mid mr1 f5 blue">mode_edit</i> <span className="ttu f6 black">Edit</span>
            </Link>
            <Link to={`/posts/${this.props.category}/${this.props.id}/delete`} className="no-underline">
                <i className="material-icons v-mid mr1 ml3 f5 red">delete</i> <span className="ttu f6 black">Delete</span>
            </Link>
        </div>
      ),
      date: () => (
        <div className="black-50">
            <i className="material-icons v-mid mr1 ml3">today</i>
            <span className="f6">{this.timeago.format(this.props.timestamp)}</span>
        </div>
      ),
      author: () => (
        <div>
            <i className="material-icons v-mid mr1 ml3 gray vmid">person</i>
            <span className="f6">by</span> <span className="gray f6 b">{this.props.author}</span>
        </div>
      )
    },

    full: () => (
      <div key={this.props.id}>
          <div className="fl w-100 pa2">
              <div className="shadow-4  bg-white tl ">
                  <div className="f3 lh-copy dark-blue bg-near-white ph4 pv2">
                      <div className="measure">
                          <Link to={`/posts/${this.props.category}/${this.props.id}`} className="no-underline blue">
                              {this.props.title}
                          </Link>
                      </div>
                  </div>
                  {/* Date and Author */}
                  <div className="ph2 pv3 overflow-hidden">
                      {/* Author */}
                      <div className="fl">{this.display.fields.author()}</div>
                      {/* Date */}
                      <div className="fl ml2">{this.display.fields.date()}</div>
                  </div>

                  {/* body */}
                  <div className="cb overflow-hidden pv5 ph4 bg-near-white relative">
                      <div className="fl tracked-mega gray">{this.props.body}</div>
                      {/* quote icon */}
                      <i className="material-icons f-6 absolute top-0 right-0 w30 white">format_quote</i>
                  </div>

                  {/* Footer */}
                  <div className="mw9 center ph3-ns bt b--black-10 f6">
                      <div className="cf ph2-ns">
                          {/* Comments */}
                          <div className="fl w-100 w-third-ns pa2">
                              <div className=" bg-white pv2">
                                  <CommentsCount commentcount={this.props.commentcount} />
                              </div>
                          </div>
                          {/* Votescore */}
                          <div className="fl w-100 w-third-ns pa2 tc">
                              <div className=" bg-white pv2">
                                  <Rate like={this.upVote} dislike={this.downVote} votescore={this.props.votescore} />
                              </div>
                          </div>
                          {/* Links: edit / delete */}
                          <div className="fl w-100 w-third-ns pa2 tr">{this.display.fields.links}</div>
                      </div>
                  </div>
              </div>
          </div>
          {this.props.commentcount > 0 && <Comments postid={this.props.id} commentcount={this.props.commentcount} />}
      </div>
    ),
    teaser: () => (
      <div key={this.props.id}>
          <div className="fl w-100 pa2">
              <div className="shadow-4  bg-white tl ">
                  <div className="f3 lh-copy dark-blue bg-near-white ph4 pv2">
                      <div className="measure">
                          <Link to={`/posts/${this.props.category}/${this.props.id}`} className="no-underline blue">
                              {this.props.title}
                          </Link>
                      </div>
                  </div>
                  {/* Date and Author */}
                  <div className="ph2 pv3 overflow-hidden">
                      {/* Author */}
                      <div className="fl">{this.display.fields.author()}</div>
                      {/* Date */}
                      <div className="fl ml2">{this.display.fields.date()}</div>
                  </div>

                  {/* Footer */}
                  <div className="mw9 center ph3-ns bt b--black-10 f6">
                      <div className="cf ph2-ns">
                          {/* Comments */}
                          <div className="fl w-100 w-third-ns pa2">
                              <div className=" bg-white pv2">
                                  <CommentsCount commentcount={this.props.commentcount} />
                              </div>
                          </div>
                          {/* Votescore */}
                          <div className="fl w-100 w-third-ns pa2 tc">
                              <div className=" bg-white pv2">
                                  <Rate like={this.upVote} dislike={this.downVote} votescore={this.props.votescore} />
                              </div>
                          </div>
                          {/* Links: edit / delete */}
                          <div className="fl w-100 w-third-ns pa2 tr">{this.display.fields.links}</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  };

  render() {
    return typeof this.props.id === "string" ? this.display[this.state.display]() : "<div>Ruta no encontrada</div>";
  }
}

function mapStoreToProps(store, own_props) {
  // this.props.location.pathname
  const path_splitted = own_props.location.pathname.split("/");
  let post_id = false;

  if (path_splitted.length === 4) {
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
